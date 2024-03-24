import React, { useState } from "react";
import apple from "../../assets/apple.png";
import Navbar from "../Navbar/Navbar";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <main className=" md:px-12 md:py-6 bg-primaryDark">
      <section className=" relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md ">
        <div className=" container">
          {/* navbar section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Landing section */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px]">
            <div className=" text-white mt-[100px] md:mt-0 p-4 space-y-4">
              {/* text content section */}
              <h1 data-aos="fade-up" className="  text-3xl pl-6 md:pl-14">
                {/* 01_______ */}
              </h1>
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="  text-5xl font-bold uppercase text-shadow"
              >
                A Healthy Fruit
              </h1>
              <p data-aos="fade-up" data-aos-delay="500" className=" text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                vitae.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-offset="0"
                className=" secondary-btn cursor-pointer "
              >
                {" "}
                Shop Now
              </button>
            </div>

            {/* image section */}
            <div data-aos="zoom-in">
              <img
                src={apple}
                alt=" not found"
                className=" relative z-10 w-[400px] img-shadow"
              />
            </div>

            {/* blank div section */}
            <div className=" md:hidden"></div>
          </div>
        </div>
        {/* background text  */}
        <h1
          data-aos="fade"
          data-aos-delay="600"
          data-aos-duration="1800"
          className="large-text"
        >
          {" "}
          Apple
        </h1>
        {/* sidebar section */}
        {sidebar && (
          <div className=" absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10">
            <div className=" w-full h-full flex justify-center items-center">
              <div className=" text-white flex flex-col justify-center items-center gap-6">
                {/* line */}
                <div className=" w-[1px] h-[70px] bg-white"></div>
                <div className=" inline-block p-2 rounded-full cursor-pointer border border-white hover:bg-blue-500">
                  <FaFacebookF className=" text-2xl" />
                </div>
                <div className=" inline-block p-2 rounded-full cursor-pointer border border-white hover:bg-green-600">
                  <FaLinkedinIn className=" text-2xl" />
                </div>
                <div className=" inline-block p-2 rounded-full cursor-pointer border border-white hover:bg-gradient-to-r from-red-600 to-yellow-400">
                  <FaInstagram className=" text-2xl" />
                </div>
                <div className=" w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
