import React, { useState, useEffect } from "react";
import "../../App.css";
import axios from "axios";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://0c7d0caa3768a5b0.mokky.dev/slder")
      .then((res) => {
        setdata(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <div
      style={{
        marginTop: "-15px",
      }}
      className="container_product"
    >
      <div className="flex items-center justify-center overflow-hidden rounded-lg">
        <div
          className="flex w-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            height: "400px",
          }}
        >
          {data.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex items-center justify-between bg-opacity-45 bg-black h-full  text-white px-10 rounded-lg ">
                <div className="w-1/2">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl">{slide.text}</p>
                </div>
                <div className="w-1/3">
                  <img
                    style={{
                      width: "300px",
                    }}
                    src={slide.image}
                    alt="Penopleks"
                    className="rounded-lg "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
