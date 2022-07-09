import React from "react";
import Banner from "./Banner";
import VisualizeData from "./VisualizeData";
const Home = () => {
  return (
    <div>
      <Banner bannerText="Sextant" />
      <div className="Cards">
        <VisualizeData title="Show case1" content="I am the 1st show case" />
        <VisualizeData title="Show case2" content="I am the 2nd show case" />
        <VisualizeData title="Show case3" content="I am the 3rd show case" />
      </div>
    </div>
  );
};

export default Home;
