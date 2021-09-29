import React, { FC, ReactElement } from "react";
import { Card, CardBody, CardTitle, Col } from "reactstrap";
import css from "./Features.module.css";

interface Props {

}

const Config: FC<Props> = (): ReactElement => {

  /* Config file formatting guide:
  *  - Convert whitespaces to non-breaking spaces
  *  - Convert newlines to br tags
  *  - Minify string
  * */
  const configFile = <React.Fragment>broadcasts: true<br/>announcementtitle: 'Hey!'<br/>bot:<br/>&nbsp;&nbsp;enable: false<br/>&nbsp;&nbsp;token: ''<br/>&nbsp;&nbsp;presence:<br/>&nbsp;&nbsp;&nbsp;&nbsp;action: 1<br/>&nbsp;&nbsp;&nbsp;&nbsp;url: 'https://rudrecciah.dev/admincore'<br/>&nbsp;&nbsp;&nbsp;&nbsp;status: 'staff members'<br/>&nbsp;&nbsp;prefix: '/'<br/>&nbsp;&nbsp;channels:<br/>&nbsp;&nbsp;&nbsp;&nbsp;admin: ''<br/>&nbsp;&nbsp;&nbsp;&nbsp;trusted: ''<br/>&nbsp;&nbsp;&nbsp;&nbsp;staff: ''<br/>&nbsp;&nbsp;commands:<br/>&nbsp;&nbsp;&nbsp;&nbsp;announce: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;freeze: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;unfreeze: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;stats: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;history: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;aliases: true<br/>chatlink:<br/>&nbsp;&nbsp;send:<br/>&nbsp;&nbsp;&nbsp;&nbsp;enable: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;channel: ''<br/>&nbsp;&nbsp;get:<br/>&nbsp;&nbsp;&nbsp;&nbsp;enable: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;token: ''<br/>webhook:<br/>&nbsp;&nbsp;customName: false<br/>&nbsp;&nbsp;name: 'jams'<br/>&nbsp;&nbsp;icon: 'https://raw.githubusercontent.com/RudRecciah/files/main/jams.PNG'<br/>&nbsp;&nbsp;errorLogger:<br/>&nbsp;&nbsp;&nbsp;&nbsp;use: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;reload: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;token: ''<br/>&nbsp;&nbsp;reportLogger:<br/>&nbsp;&nbsp;&nbsp;&nbsp;use: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;token: ''<br/>&nbsp;&nbsp;banLogger:<br/>&nbsp;&nbsp;&nbsp;&nbsp;use: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;token: ''<br/>&nbsp;&nbsp;muteLogger:<br/>&nbsp;&nbsp;&nbsp;&nbsp;use: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;token: ''<br/>&nbsp;&nbsp;appealLogger:<br/>&nbsp;&nbsp;&nbsp;&nbsp;use: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;token: ''<br/>&nbsp;&nbsp;kickLogger:<br/>&nbsp;&nbsp;&nbsp;&nbsp;use: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;token: ''<br/>&nbsp;&nbsp;broadcastLogger:<br/>&nbsp;&nbsp;&nbsp;&nbsp;use: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;token: ''<br/>staffmode:<br/>&nbsp;&nbsp;resetgamemode: true<br/>&nbsp;&nbsp;tptospawn:<br/>&nbsp;&nbsp;&nbsp;&nbsp;teleport: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;use-spawn-cmd: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;spawn-cmd: 'spawn'<br/>&nbsp;&nbsp;&nbsp;&nbsp;location:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;world: 'world'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coordinates:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x: 0.0<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y: 0.0<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z: 0.0<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yaw: 0<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pitch: 0<br/>&nbsp;&nbsp;pseudodisconnect:<br/>&nbsp;&nbsp;&nbsp;&nbsp;send-message: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;message: '&e%p% left the game'<br/>&nbsp;&nbsp;pseudojoin:<br/>&nbsp;&nbsp;&nbsp;&nbsp;send-message: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;message: '&e%p% joined the game'<br/>&nbsp;&nbsp;punishment:<br/>&nbsp;&nbsp;&nbsp;&nbsp;report:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reasons:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1: 'Cheating'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2: 'Chat Abuse'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3: 'Harassment'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4: 'Chargebacks'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5: 'DDoS Threats'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6: 'Name Abuse'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7: 'Threatening Players'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8: 'Conspiracy'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;autoclose:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;close-on-mute: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;close-on-tempban: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;close-on-ban: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;close-on-ip-ban: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;teleport: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;ban:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reasons:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1: 'Cheating'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2: 'Chat Abuse'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3: 'Harassment'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4: 'Chargebacks'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5: 'DDoS Threats'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6: 'Name Abuse'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7: 'Threatening Players'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8: 'Conspiracy'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tempban-length: 30<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ip-ban: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;mute:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reasons:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1: 'Cheating'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2: 'Chat Abuse'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3: 'Harassment'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4: 'Chargebacks'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5: 'DDoS Threats'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6: 'Name Abuse'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7: 'Threatening Players'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8: 'Conspiracy'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mute-length: 30<br/>&nbsp;&nbsp;&nbsp;&nbsp;appeals:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mute:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;allow-appeals: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: 'To appeal your mute, go to https://example.com/appeals.'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tempban:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;allow-appeals: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: 'To appeal your ban, go to https://example.com/appeals.'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ban:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;allow-appeals: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: 'To appeal your ban, go to https://example.com/appeals.'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ip-ban:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;allow-appeals: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: 'To appeal your IP ban, go to https://example.com/appeals.'<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;api:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enable: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hostname: localhost<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;port: 5000<br/>&nbsp;&nbsp;stats:<br/>&nbsp;&nbsp;&nbsp;&nbsp;api-key: ''<br/>&nbsp;&nbsp;&nbsp;&nbsp;public-networks: false<br/>&nbsp;&nbsp;&nbsp;&nbsp;strict: true<br/>serverstatus:<br/>&nbsp;&nbsp;protect-sensitive: true<br/>&nbsp;&nbsp;serverVersion:<br/>&nbsp;&nbsp;&nbsp;&nbsp;log: true<br/>&nbsp;&nbsp;buildInformation:<br/>&nbsp;&nbsp;&nbsp;&nbsp;log: true<br/>&nbsp;&nbsp;ip:<br/>&nbsp;&nbsp;&nbsp;&nbsp;log: true<br/>&nbsp;&nbsp;port:<br/>&nbsp;&nbsp;&nbsp;&nbsp;log: true<br/>&nbsp;&nbsp;playerCount:<br/>&nbsp;&nbsp;&nbsp;&nbsp;log: true<br/>&nbsp;&nbsp;tps:<br/>&nbsp;&nbsp;&nbsp;&nbsp;log:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;one-minute: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;five-minutes: true<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fifteen-minutes: true<br/>&nbsp;&nbsp;uptime:<br/>&nbsp;&nbsp;&nbsp;&nbsp;log: true<br/>&nbsp;&nbsp;ram:<br/>&nbsp;&nbsp;&nbsp;&nbsp;log: true<br/>&nbsp;&nbsp;ping:<br/>&nbsp;&nbsp;&nbsp;&nbsp;log: true<br/>version: 4</React.Fragment>;

  return (
    <React.Fragment>
      <Col className={"mb-4"}>
        <Card className={"shadow bg-dark p-3"}>
          <CardTitle className={"text-poppins fs-2 text-primary"}>
            Default Configuration
          </CardTitle>
          <CardBody className={"text-urbanist fs-4"}>
            <code className={"text-light text-monospace"}>
              {configFile}
            </code>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export { Config };