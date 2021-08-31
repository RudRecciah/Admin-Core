import React, { FC, ReactElement } from "react";
import { Container } from "reactstrap";
import logo from "../static/logo.png";
import { motion } from "framer-motion";
import { PageAnimationController } from "../utils/PageAnimationController";
import { PageWrapper } from "../utils/PageWrapper";

interface Props {

}

const Home: FC<Props> = (): ReactElement => {
  return (
    <React.Fragment>
      <PageWrapper>
        <Container fluid={true}>
          <Container className={"text-center text-light"}>
            <h1>bro</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus, mauris ut efficitur egestas, ante enim imperdiet nisi, et ultrices justo enim nec elit. Quisque tincidunt nibh eu malesuada egestas. Cras ultrices ante nec mi aliquet mattis ac quis ex. Vivamus scelerisque eleifend leo. Integer euismod ligula et enim sollicitudin, id ullamcorper elit semper. Sed laoreet nisl sem, ullamcorper elementum quam cursus eu. Ut dignissim commodo nisl auctor tempor. Etiam in ullamcorper nibh.

              Duis at egestas neque. Nunc nisi dui, dapibus et mollis eget, consequat quis justo. Proin turpis ex, venenatis a molestie eu, aliquet sed risus. Aliquam sagittis nulla et enim dapibus, sed tincidunt arcu malesuada. In ac nisi non tortor consequat hendrerit. Suspendisse eu pharetra elit, vel feugiat orci. Nam dignissim libero sed molestie vehicula. Donec dapibus egestas suscipit.

              Morbi pretium turpis ut nibh sodales eleifend. Nullam id neque volutpat, lobortis nulla in, bibendum felis. Vestibulum consequat tincidunt tellus. Nam vel lectus sit amet leo lobortis venenatis. Aliquam erat volutpat. Quisque ut quam blandit, auctor justo eu, semper sem. Mauris consectetur ac lorem in auctor.

              Vivamus risus odio, viverra ut turpis non, elementum aliquet mauris. Nunc commodo malesuada libero vel egestas. Curabitur volutpat euismod justo ac semper. Aliquam mollis diam sed mi ultricies porttitor. Nunc consectetur a velit sit amet pulvinar. Vivamus arcu augue, gravida euismod condimentum eu, pellentesque eget justo. Maecenas commodo urna in purus aliquet pretium. Pellentesque at ullamcorper ante, pretium egestas enim. Cras pulvinar ante eu massa rhoncus, at maximus ligula volutpat. Nullam condimentum vulputate dui, quis lobortis sapien facilisis ac. Maecenas in orci tempus, tincidunt tortor eget, elementum felis. Ut et dolor magna. Suspendisse ex libero, faucibus eget arcu porttitor, imperdiet lobortis magna.

              Integer sed elementum urna. Morbi pellentesque, ligula eu facilisis pretium, sapien tortor sodales nisi, eget consectetur erat lorem ac est. Morbi non pretium quam. Nullam sit amet euismod nulla. In dolor lorem, tincidunt eu diam vel, varius fringilla purus. Donec aliquet varius lacus, id gravida sem porta quis. Donec ultrices erat diam, ut molestie justo fringilla in.

              Nam ut est sit amet dolor commodo ornare id a sapien. Vestibulum bibendum venenatis quam. Quisque commodo nunc nec ligula facilisis, a egestas mauris porta. Phasellus porta quam sed ante tempor rutrum. Sed vehicula ligula a mi sodales, sit amet hendrerit ex ornare. Morbi scelerisque gravida pulvinar. Etiam sit amet gravida nunc, eu feugiat urna. Pellentesque eget imperdiet massa. Sed aliquam nibh ac lacus aliquam, a maximus tortor ornare.

              In ut fermentum libero, nec vulputate enim. Nunc gravida ut felis id scelerisque. Sed aliquet eleifend aliquet. Vestibulum sollicitudin libero efficitur sapien imperdiet, et tincidunt metus vestibulum. Sed lacus eros, eleifend ut bibendum eget, tincidunt in lorem. Praesent ultricies mauris vel arcu vehicula molestie. Pellentesque finibus nulla non tristique luctus. Duis dapibus bibendum metus, sit amet mollis est dapibus non. Aliquam ac nibh ut tortor convallis dignissim non a velit. Duis laoreet, sem non varius posuere, lacus mauris tempus leo, id sollicitudin ligula nunc eu ex. Donec accumsan tellus eu dui finibus ultrices. Morbi condimentum neque risus, sed euismod turpis ornare nec. Integer vulputate pellentesque dui, sed blandit augue lobortis non. Morbi vel ex blandit, faucibus velit eget, varius tortor.

              Nam sapien risus, scelerisque vitae felis a, pellentesque fermentum turpis. Mauris quis auctor erat, vel posuere odio. Ut sed pretium urna. Phasellus ut diam et magna sodales dictum. Morbi metus est, pellentesque non sagittis vel, sodales tincidunt nunc. Aenean luctus tincidunt laoreet. Nunc tristique hendrerit nibh, nec condimentum velit euismod id. Ut in tempor eros. Aliquam nec gravida quam. Integer eu ipsum neque. Maecenas posuere pretium nunc pellentesque sodales. Fusce eleifend massa enim, sit amet euismod metus porttitor at.

              Phasellus sed faucibus metus, non interdum nisi. Ut suscipit mauris in nisl commodo, nec ornare magna mollis. Ut gravida interdum tristique. Sed viverra magna ut porttitor porta. Integer vitae velit id nibh tempor tempor ut ut nunc. Quisque maximus dui ut lorem hendrerit, a molestie nisi molestie. Nam nec euismod lorem, eu varius eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas dapibus tellus eros, ac iaculis sem luctus quis. Ut gravida laoreet enim a tincidunt. Cras at libero vitae ligula maximus dignissim. Sed eget dictum nisi. Sed vehicula ipsum eu nunc sagittis, sed lobortis mi fringilla. Mauris lorem nisi, mattis at lacus quis, rutrum hendrerit sapien.

              In dignissim massa lectus, ut faucibus dolor vehicula nec. Nam ut hendrerit massa. Integer molestie id magna at lacinia. Integer facilisis id velit vehicula porta. Nam cursus convallis consectetur. Vestibulum ullamcorper erat in erat mollis, ut laoreet turpis dapibus. Etiam vel semper magna. Pellentesque fringilla nec ex id dictum. In efficitur nulla et est maximus viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sollicitudin laoreet laoreet. Pellentesque facilisis sit amet velit sed malesuada. Vivamus et nisi vitae arcu porttitor pharetra. Donec congue mauris feugiat, suscipit urna et, ornare urna. Donec consectetur libero pulvinar vestibulum gravida.

              Donec laoreet justo a mattis rutrum. Fusce cursus varius tellus. Ut porttitor, nisl ac vehicula condimentum, lacus felis ultricies elit, a luctus justo orci vel est. Etiam ligula urna, tempus ultricies libero quis, vulputate pharetra arcu. Morbi lacinia vel metus sit amet fermentum. Integer posuere consequat sodales. Morbi suscipit dapibus lectus, rutrum consectetur dolor malesuada quis. Ut commodo dui ac tellus consectetur pretium. Donec posuere justo ac neque posuere vestibulum. Vivamus a fermentum metus, in auctor justo.

              Nulla eget enim quis tortor pulvinar dignissim ac vel diam. Phasellus nec posuere erat. Sed ac nibh nec est sodales convallis. Nunc quis nulla mattis, semper quam id, facilisis purus. Sed efficitur, lorem sed condimentum rhoncus, libero lorem lacinia enim, non imperdiet dolor sem in nulla. Duis pulvinar ut orci eu elementum. Cras quis quam ullamcorper, mollis sapien viverra, tempus ipsum. Praesent sit amet dui et nulla sagittis pulvinar id vitae turpis. Suspendisse potenti. Integer sodales fringilla sem. Donec quis facilisis tortor. Morbi mattis maximus faucibus. Pellentesque semper efficitur bibendum. Praesent ut pulvinar tortor. Duis non tempus nunc. Sed eu felis orci.

              Sed vulputate mauris non odio cursus, sit amet mollis est euismod. Donec nec ultricies enim, et sodales lectus. Fusce eleifend cursus turpis. Curabitur ac nisi accumsan, tincidunt risus eget, auctor urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus eu scelerisque tortor. Maecenas pharetra ultricies eros, a iaculis libero hendrerit sit amet. Integer imperdiet facilisis rhoncus. Mauris porttitor mi nibh, in luctus sem molestie vitae. Donec id aliquam lectus, nec pellentesque ante. Nulla facilisi. Proin egestas enim in eros porta, vel imperdiet justo vestibulum. Curabitur at diam porttitor felis molestie facilisis. Phasellus nec pellentesque massa.

              Integer egestas non tellus nec vestibulum. Cras erat eros, facilisis ac efficitur sed, posuere sit amet metus. Ut in dapibus libero, in aliquam enim. Pellentesque scelerisque nisi finibus, vehicula tellus vitae, dictum mauris. Aliquam ultricies sagittis lacus, quis venenatis erat faucibus et. Donec a hendrerit urna. Nam pretium odio in pellentesque placerat. Ut vel dictum erat. Aenean rhoncus porta tincidunt. Pellentesque molestie faucibus ornare. Donec ante tellus, scelerisque eget velit nec, ornare dictum ipsum. Mauris urna nibh, porttitor ac pharetra quis, ultricies sit amet ligula. Suspendisse faucibus turpis ante, non sodales ipsum mattis vel.

              Proin venenatis nisl sed velit convallis suscipit. Duis eget euismod nisl. Suspendisse gravida nibh ligula, in pulvinar neque eleifend at. Vivamus cursus elit eget tortor suscipit finibus. Vivamus venenatis et sem at luctus. Cras vitae tristique tortor. Mauris ut sapien odio. Proin cursus enim orci. Nam consequat malesuada tortor, a tristique orci dictum at. Donec et vestibulum tortor. Donec iaculis metus non urna tincidunt feugiat. Donec leo dui, maximus at eleifend at, vestibulum ac risus.

              Cras posuere turpis quis nunc malesuada rhoncus. Curabitur dictum nulla nec risus aliquet accumsan. Aliquam aliquet dictum nisl vulputate mattis. Morbi in lorem sed enim ullamcorper tincidunt at quis erat. Aliquam quis nisi condimentum, accumsan elit auctor, mattis dolor. Donec lectus dui, ullamcorper quis ex nec, suscipit lacinia enim. Donec et bibendum justo, vel volutpat elit. Pellentesque luctus ipsum nibh, eu ultricies dolor maximus sed. Donec sit amet accumsan mi. Phasellus euismod odio nibh, ut posuere magna consectetur et. Ut et semper massa, et elementum nibh.

              Nulla quis feugiat nisi. Proin augue lorem, feugiat nec pulvinar at, fringilla at sapien. Ut augue sem, lacinia at libero ac, maximus placerat dolor. Fusce a iaculis felis, at fermentum enim. Phasellus sit amet lorem vitae est ultricies tempus quis id turpis. Maecenas tincidunt bibendum est. Quisque posuere vel nisi sed maximus. Donec venenatis, sem vel congue pretium, risus lectus rutrum magna, sagittis efficitur nisl erat at orci. Ut tempus, mauris non euismod dignissim, sem tortor suscipit ipsum, non consequat diam nisi sit amet nisi. Nam leo leo, sagittis a neque et, maximus consectetur sem. Mauris tincidunt, lorem ut tempor fringilla, ipsum enim semper metus, vitae porttitor augue erat ac velit. Vestibulum malesuada vel turpis sed gravida.

              Duis tincidunt eget dui vel fringilla. Praesent nisl enim, scelerisque eu blandit at, pellentesque id nisi. Donec pretium, urna hendrerit sodales dictum, mi lacus blandit mauris, sed cursus lectus nunc in ipsum. Curabitur consequat gravida hendrerit. Aliquam maximus ipsum eget justo hendrerit, eu tempor quam suscipit. Donec blandit sapien velit, scelerisque vestibulum tortor ultricies eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec at consequat massa. Nullam arcu turpis, aliquet nec urna id, commodo ultrices arcu.

              Aliquam nec mauris id magna ullamcorper tempus sed vel enim. Duis bibendum metus bibendum lectus eleifend rutrum. Ut aliquam mattis felis in maximus. Cras dapibus malesuada ipsum, ut sodales urna luctus id. Donec nec arcu quam. Nulla leo lacus, dignissim vel neque posuere, posuere vestibulum nisl. Etiam rhoncus molestie neque, eget molestie risus ornare et. Nam elementum justo ac quam blandit lobortis. Nullam mauris turpis, dapibus id justo sed, condimentum ultricies nibh. Morbi dictum consectetur ante non hendrerit. Pellentesque in eros et urna eleifend mattis. Nunc non nibh massa. Phasellus pellentesque nulla a leo ullamcorper maximus. Proin dui urna, convallis eu sollicitudin lacinia, auctor et neque. Nulla finibus dapibus dui, a aliquet nunc consectetur a.

              Integer pellentesque condimentum neque eu rutrum. Aliquam sed ante ut turpis egestas convallis id sit amet justo. In hac habitasse platea dictumst. Sed semper tincidunt est, a rhoncus nunc viverra eget. Vivamus accumsan lacinia sollicitudin. Curabitur a scelerisque libero. Curabitur pellentesque elit at nisl sagittis placerat. Curabitur sit amet pellentesque ante. Suspendisse suscipit imperdiet rhoncus. Duis rhoncus condimentum mi eu iaculis.</p>
          </Container>
        </Container>
      </PageWrapper>
    </React.Fragment>
  );
};

export default Home;