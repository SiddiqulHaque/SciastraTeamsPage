import React from "react";
import Navbar from "../Components/Navbar";
import ReactTyped from "react-typed";
import Sliderc from "../Components/Slider";
import Founder from "../Components/Founder";
import Footer from "../Components/Footer";
const Teams = () => {
  return (
    <div className=" flex flex-col">
      <Navbar />
      <div className="uppercase text-purple-400 p-[1rem] md:p-[5rem]  h-[10rem] md:h-[15rem] text-2xl md:text-4xl w-[100%] md:w-[70%] leading-14">
        <h2 className="font-medium">
          Learn from the{" "}
          <span className="font-semibold text-purple-500">top scientists</span>{" "}
          and{" "}
          <span className="font-semibold text-purple-500">
            Research Scholars{" "}
          </span>
          <ReactTyped
            strings={["  from All over the World"]}
            typeSpeed={60}
            loop
            showCursor={true}
          />
        </h2>
        
      </div>
      <Sliderc/>
      <h3 className="text-3xl font-semibold text-purple-800 text-center mt-8"> Meet Our Founders</h3>
      <Founder/>
      <Footer/>
    </div>
  );
};

export default Teams;
