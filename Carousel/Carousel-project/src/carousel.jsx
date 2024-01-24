import React, { useState } from "react";
import { CarouselItem } from "./carouselItem";
import arrowBack from "./assets/arrow_back.svg";
import arrowForward from "./assets/arrow_forward.svg";
import radioUnchecked from "./assets/radio_unchecked.svg";
import radioChecked from "./assets/radio_checked.svg";
import nyc1 from "./assets/newyork1.png"
import nyc2 from "./assets/newyork2.png"
import nyc3 from "./assets/newyork3.png"
import nyc4 from "./assets/newyork4.png"

function Carousel() {
  //defining state variables to show the active element
  const [activeId, setActiveId] = useState(0);

  // items that will be put into the carousel element
  const items = [
    {
      id: 1,
      description: "Central Park",
      icon: nyc1,
    },
    {
      id: 2,
      description: "Empire State Bulding",
      icon: nyc2,
    },
    {
      id: 3,
      description: "Times Square",
      icon: nyc3,
    },
    {
      id: 4,
      description: "New york Skyline",
      icon: nyc4,
    },
  ];

  const updateIndex = (newId) => {
    if (newId < 0) {
      newId = 0;
    } else if (newId >= items.length) {
      newId = items.length - 1;
    }

    setActiveId(newId);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeId * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem key={item.id} item={item}  />;
        })}
      </div>

      <div className="carousel-buttons">
        <button onClick={() => updateIndex(activeId - 1)} >
          <img src={arrowBack}></img>
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return  <button onClick={() => updateIndex(index)}>
            <img src={index === activeId ? radioChecked : radioUnchecked} alt={`Indicator ${index + 1}`} />
            </button>
          })}
        </div>
        <button onClick={() => updateIndex(activeId + 1)}>
          <img src={arrowForward}></img>
        </button>
      </div>
    </div>
  );
}

export { Carousel };
