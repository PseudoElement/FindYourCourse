import React from "react";
import GreenCard from "./components/cards/GreenCard";
import WhiteCard from "./components/cards/WhiteCard";
import Navbar from "./components/Navbar";
import "./styles/MainStyle.scss";
import Hat from "./pics/Loader.png";
import Barco from "./pics/Barco.png";
import Buffet from "./pics/Buffet.png";
import Danisco from "./pics/Danisco.png";
import Embratur from "./pics/Embratur.png";

const Main = () => {
  return (
    <main>
      <div className="leftPart">
        <Navbar />
      </div>
      <div className="rightPart">
        <section className="cards">
          <WhiteCard logo={Embratur} />
          <GreenCard />
          <WhiteCard logo={Danisco} />
          <GreenCard />
          <WhiteCard logo={Buffet} />
          <WhiteCard logo={Barco} />
        </section>
        <div className="moreProgrammes">
          <span>More programmes</span>
          <img src={Hat} alt="Loader" />
        </div>
      </div>
    </main>
  );
};

export default Main;
