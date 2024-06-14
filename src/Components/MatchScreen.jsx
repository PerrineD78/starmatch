import React from 'react';
import "./MatchScreen.css";
import Abdoulove from "../assets/Abdoulove.jpg";
import Tealk from "../assets/Tealk.jpg";


const MatchScreen = () => {
  return (
    <section>
      <h2>StarMatch</h2>
      <h1>It's a match !</h1>
        <div className="flexMatch">
        <img src={Abdoulove}/>
        <img src={Tealk}/>
        </div>
        <div className="buttonMatch">
        <button>Envoyer un message</button>
        <button>Continuer à swiper</button>
        </div>
    </section>
  );
};

export default MatchScreen;