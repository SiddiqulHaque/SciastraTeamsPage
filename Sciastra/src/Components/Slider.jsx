import React from "react";
import Cards from "./cards";
import { inUni } from "../Data/Universities";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { abroaduni } from "../Data/Universities";
import TeachersCards from "./TeachersCards";
import { oneteacher } from "../Data/Teachers";
const Sliderc = () => {
  const sliderSettings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <h2 className="text-center text-purple-600 font-medium text-xl md:text-3xl py-3 ">
        Explore our Universities and Colleges
      </h2>
      <div className="w-[80%] mx-auto my-4 ">
        <Slider {...sliderSettings}>
          {inUni.map((uni) => (
            <Cards name={uni.name} city={uni.city} />
          ))}
        </Slider>
      </div>
      <div className="w-[80%] mx-auto my-4 ">
        <Slider {...sliderSettings}>
          {abroaduni.map((uni) => (
            <Cards name={uni.name} city={uni.city} />
          ))}
        </Slider>
      </div>
      <h2 className="text-center text-purple-600 font-medium text-xl md:text-3xl py-3 ">
        Meet Our Team
      </h2>

      <div className="w-[80%] mx-auto my-4  ">
        <h3 className="text-2xl text-purple-800 font-semibold px-5 py-3">Subject 1</h3>
        <Slider {...sliderSettings}>
        {oneteacher.map((teacher)=>(
          <TeachersCards name={teacher.name} college={teacher.college}/>
        ))}
          
        </Slider>
      </div>
      <div className="w-[80%] mx-auto my-4  ">
        <h3 className="text-2xl text-purple-800 font-semibold px-5 py-3">Subject 2</h3>
        <Slider {...sliderSettings}>
        {oneteacher.map((teacher)=>(
          <TeachersCards name={teacher.name} college={teacher.college}/>
        ))}
          
        </Slider>
      </div>
      <div className="w-[80%] mx-auto my-4  ">
        <h3 className="text-2xl text-purple-800 font-semibold px-5 py-3">Subject 3</h3>
        <Slider {...sliderSettings}>
        {oneteacher.map((teacher)=>(
          <TeachersCards name={teacher.name} college={teacher.college}/>
        ))}
          
        </Slider>
      </div>
    </>
  );
};

export default Sliderc;
