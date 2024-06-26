import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./pages/Navbar";
import Jumbotron from "./pages/Jumbotron";
import Portofolio from "./pages/Portofolio";
// import Skills from "./pages/Skills";
import Forms from "./pages/Forms";
import Social from "./pages/Social";

import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "./pages/Certificate";
// ..
AOS.init();

const App = () => {
  return (
    <>
      <header>
        <div className="bg-cover bg-center md:bg-desktop max-md:bg-mobile max-lg:bg-tablet">
          <Navbar />
          <Jumbotron />
        </div>
      </header>
      <main>
        <div className="bg-[#161517]">
          <Certificate />
          <Portofolio />
          {/* <Skills /> */}
          <Forms />
        </div>
      </main>
      <footer>
        <div className="bg-[#161517]">
          <Social />
        </div>
      </footer>
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default App;
