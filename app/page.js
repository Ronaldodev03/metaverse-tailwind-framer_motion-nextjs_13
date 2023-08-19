import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

export default function Home() {
  return (
    /* ***** No se que está haciendo el overflow-hidden ahí */
    /* El bg-primary-black viene del tailwind.config, ahí el carajo puso ese color, creo una custom class practicamente, aqui la usé como una clase de tailwind normal */
    <div className=" bg-primary-black overflow-hidden ">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>

      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />

      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>

      <Footer />
    </div>
  );
}
