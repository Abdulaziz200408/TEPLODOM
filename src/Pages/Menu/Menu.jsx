import React from "react";
import Slider from "./Slider";
import Card from "./Card";
import Categriyalar from "./Categriyalar";
import Brend from "../Brend";
import PopulyarCard from "./PopulyarCard";

function Menu() {
  return (
    <div>
      <Slider />
      <Categriyalar />
      <Card />
      <Brend />
      <PopulyarCard />
    </div>
  );
}

export default Menu;
