import React from 'react';

import CarouselSection from "./Components/Carosel/Carusel";
import Heder from "./Components/Heder";
import Integration from "./Components/Integration";
import Application from "./Components/Application/Application";
import Crosell from "./Components/CarousellCard/CrosellCard";
import Partner from "./Components/Parntner/partner";
import Footer from "./Components/Footer/Footer";
import CaroselImage from "./Components/CarouselImage/CaroselImage";
import Questions from "./Components/Questions/Questions";
import ScrollSection from "./Components/Scroll/ScrollSection";
import MainComponent from "./Components/MainComponent";
import './media.css'



const App = () => {
  return (
      <div>
          <Heder/>
          <Integration/>
          <Crosell/>

          <Application/>
          <CarouselSection />
          <Questions/>
          <Partner/>
          <MainComponent/>
          <CaroselImage/>
          <Footer/>
      </div>
  );
};

export default App;
