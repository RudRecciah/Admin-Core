package dev.rudrecciah.admincore;

import dev.rudrecciah.admincore.alias.AliasChecker;
import dev.rudrecciah.admincore.announcements.AnnouncementHandler;
import dev.rudrecciah.admincore.appeal.cmd.AppealListHandler;
import dev.rudrecciah.admincore.appeal.cmd.AppealReviewHandler;
import dev.rudrecciah.admincore.appeal.http.AppealHttpHandler;
import dev.rudrecciah.admincore.appeal.verify.PunishmentVerifier;
import dev.rudrecciah.admincore.ban.Banner;
import dev.rudrecciah.admincore.ban.Ipbanner;
import dev.rudrecciah.admincore.ban.Tempbanner;
import dev.rudrecciah.admincore.bot.Bot;
import dev.rudrecciah.admincore.broadcasts.BroadcastHandler;
import dev.rudrecciah.admincore.data.DataHandler;
import dev.rudrecciah.admincore.data.DataLoader;
import dev.rudrecciah.admincore.errors.SilentErrorHandler;
import dev.rudrecciah.admincore.freeze.FreezeChecker;
import dev.rudrecciah.admincore.freeze.PlayerFreezer;
import dev.rudrecciah.admincore.freeze.PlayerUnfreezer;
import dev.rudrecciah.admincore.history.HistoryLogger;
import dev.rudrecciah.admincore.inspect.Inspector;
import dev.rudrecciah.admincore.kick.Kicker;
import dev.rudrecciah.admincore.master.MasterCommand;
import dev.rudrecciah.admincore.mute.Muter;
import dev.rudrecciah.admincore.mute.Unmuter;
import dev.rudrecciah.admincore.notifs.NotificationHandler;
import dev.rudrecciah.admincore.playerdata.PlayerDataHandler;
import dev.rudrecciah.admincore.report.ReportCommandHandler;
import dev.rudrecciah.admincore.report.meta.ReportMetaCleaner;
import dev.rudrecciah.admincore.report.reviewer.ReportListHandler;
import dev.rudrecciah.admincore.report.reviewer.Reviewer;
import dev.rudrecciah.admincore.serverstatus.ServerStatus;
import dev.rudrecciah.admincore.staffchat.StaffChat;
import dev.rudrecciah.admincore.staffmode.StaffmodeHandler;
import dev.rudrecciah.admincore.unban.Unbanner;
import dev.rudrecciah.admincore.unban.Unipbanner;
import dev.rudrecciah.admincore.update.ConfigUpdateChecker;
import dev.rudrecciah.admincore.update.PluginUpdateChecker;
import dev.rudrecciah.admincore.webhook.ErrorLogger;
import fr.minuskube.inv.InventoryManager;
import org.bstats.bukkit.Metrics;
import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.command.CommandExecutor;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.*;
import org.bukkit.plugin.java.JavaPlugin;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.FileChannel;
import java.nio.channels.ReadableByteChannel;

public final class Main extends JavaPlugin implements CommandExecutor, Listener {

    public static Main plugin;
    private InventoryManager invManager;
    private AppealHttpHandler handler;
    private PunishmentVerifier verifier;

    @Override
    public void onEnable() {
        int ps = getServer().getOnlinePlayers().size();
        plugin = this;
        Boolean configExists = true;
        File file = new File(plugin.getDataFolder(), "config.yml");
        if(!file.exists()) {
            configExists = false;
        }
        saveDefaultConfig();
        if(ps > 0) {
            getLogger().severe("A server reload was detected! Never do this! Admincore, along with many other plugins, does not handle reloads gracefully and will generate errors. Stop your server and run your startup script manually to restart it. If you didn't reload, don't worry, this is just a false positive.");
            ErrorLogger.logWarn("A server reload was detected! Never do this! Admincore, along with many other plugins, does not handle reloads gracefully and will generate errors. Stop your server and run your startup script manually to restart it. If you didn't reload, don't worry, this is just a false positive.");
        }
        if(configExists) {
            if(getConfig().getBoolean("bot.enable")) {
                try {
                    Bot.enableBot();
                    getLogger().info("Admincore Discord Bot Enabled");
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            getServer().getPluginManager().registerEvents(this, this);
            DataLoader.saveDefaultdata();
            DataLoader.get().options().copyDefaults(true);
            PlayerDataHandler.createDefaults();
            getCommand("staffchat").setExecutor(new StaffChat());
            getCommand("serverstatus").setExecutor(new ServerStatus());
            getCommand("announce").setExecutor(new AnnouncementHandler());
            getCommand("staffmode").setExecutor(new StaffmodeHandler());
            getCommand("admincore").setExecutor(new MasterCommand());
            getCommand("freeze").setExecutor(new PlayerFreezer());
            getCommand("unfreeze").setExecutor(new PlayerUnfreezer());
            getCommand("report").setExecutor(new ReportCommandHandler());
            getCommand("inspect").setExecutor(new Inspector());
            getCommand("ban").setExecutor(new Banner());
            getCommand("mute").setExecutor(new Muter());
            getCommand("aliases").setExecutor(new AliasChecker());
            getCommand("staffnotifications").setExecutor(new NotificationHandler());
            getCommand("tempban").setExecutor(new Tempbanner());
            getCommand("unmute").setExecutor(new Unmuter());
            getCommand("reviewreport").setExecutor(new Reviewer());
            getCommand("punishmenthistory").setExecutor(new HistoryLogger());
            getCommand("pardon").setExecutor(new Unbanner());
            getCommand("pardon-ip").setExecutor(new Unipbanner());
            getCommand("ban-ip").setExecutor(new Ipbanner());
            getCommand("listappeals").setExecutor(new AppealListHandler());
            getCommand("reviewappeal").setExecutor(new AppealReviewHandler());
            getCommand("kick").setExecutor(new Kicker());
            getCommand("listreports").setExecutor(new ReportListHandler());
            invManager = new InventoryManager(this);
            invManager.init();
            PluginUpdateChecker.checkForUpdates();
            ConfigUpdateChecker.checkVersion();
            if(getConfig().getBoolean("staffmode.punishment.appeals.api.enable")) {
                handler = new AppealHttpHandler();
                Thread h = new Thread(handler);
                h.setName("Admincore HTTP Server thread");
                h.start();
            }
            verifier = new PunishmentVerifier();
            Thread v = new Thread(verifier);
            v.setName("Admincore Punishment Verifier thread");
            v.start();
            try {
                ReadableByteChannel readChannel = Channels.newChannel(new URL("https://raw.githubusercontent.com/RudRecciah/Admin-Core/main/other/data.md").openStream());
                FileOutputStream fileOS = new FileOutputStream(Bukkit.getServer().getPluginManager().getPlugin("Admincore").getDataFolder() + File.separator + "data" + File.separator + "README.md");
                FileChannel writeChannel = fileOS.getChannel();
                writeChannel.transferFrom(readChannel, 0, Long.MAX_VALUE);
            } catch (IOException e) {
                SilentErrorHandler.onSilentError(e);
            }
            getServer().getScheduler().runTaskTimer(this, this::kickIpBanned, 200, 200L);
            int pluginId = 11086;
            new Metrics(this, pluginId);
            getServer().getScheduler().runTaskLater(this, new Runnable() {
                @Override
                public void run() {
                    if(getConfig().getBoolean("broadcasts")) {
                        BroadcastHandler.handleBroadcast();
                    }
                }
            }, 400L);
            getLogger().info("Admincore Plugin Enabled");
        }else{
            getLogger().info("It seems like you either didn't have a config file for Admincore before running or you've just installed Admincore. Either way, it cannot be used in this state and may generate errors. Your server has been shut down to prevent a potantially fatal error. You should set up your config file before starting your server again. Any errors that you've experienced right now shouldn't be worried about, and should only be investigated if the behavior continues. Thank you!");
            getServer().shutdown();
        }
    }

    public InventoryManager getInvManager() {
        return invManager;
    }

    //yes this method needs to be here its the most Important™ method in the entire plugin 100% not redundant
    public static void rud() {
        return;
    }

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent e) {
        StaffmodeHandler.hide();
        StaffmodeHandler.clearJoin(e.getPlayer());
        PlayerDataHandler.handlePlayerData(e.getPlayer());
        ReportMetaCleaner.cleanReportMeta(e.getPlayer());
        FreezeChecker.playerFrozen(e.getPlayer());
    }

    @EventHandler
    public void onPlayerLeave(PlayerQuitEvent e) {
        StaffmodeHandler.clear(e.getPlayer(), e);
    }

    public void kickIpBanned() {
        for(String ban : getServer().getIPBans()) {
            for(Player p : getServer().getOnlinePlayers()) {
                if(p.getAddress().getHostString().equalsIgnoreCase(ban)) {
                    if(getConfig().getBoolean("violence")) {
                        p.kickPlayer("*kmt* \n man I said make ready... \n man I said present... \n blud are you dumb?! are you getting rude to man?! \n bop! \n thats what you get fam, pussyhole! yeah blud \n who's endz you coming to now fam?! \n dickhead!");
                    }else{
                        p.kickPlayer("Another account on your network was IP banned forever!");
                    }
                }
            }
        }
    }

    @EventHandler
    public void onPlayerTeleport(PlayerTeleportEvent e) {
        StaffmodeHandler.interactWithPlayer(e.getPlayer(), e);
    }

    @EventHandler
    public void onPlayerChat(AsyncPlayerChatEvent e) {
        if(PlayerDataHandler.muteExpired(e.getPlayer())) {
            e.setCancelled(true);
            e.getPlayer().sendMessage(ChatColor.YELLOW + "You're currently muted!");
        }else if(e.getPlayer().hasPermission("admincore.staff")) {
            boolean b = StaffmodeHandler.checkStaffmodeChat(e.getPlayer(), e.getMessage());
            if(b) {
                e.setCancelled(true);
            }
        }
    }

    @EventHandler
    public void onPlayerMove(PlayerMoveEvent e) {
        if(e.getPlayer().hasMetadata("frozen")) {
            boolean b = DataHandler.getMetaBoolean(e.getPlayer(), "frozen");
            if(b) {
                e.setCancelled(true);
            }
        }
    }

    @Override
    public void onDisable() {
        if(getConfig().getBoolean("bot.enable")) {
            Bot.disableBot();
            getLogger().info("Admincore Discord Bot Disabled");
        }
        if(handler != null) {
            handler.end();
        }
        verifier.end();
        getLogger().info("Admincore Plugin Disabled");
    }
}
