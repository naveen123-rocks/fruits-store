import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTelegram} from 'react-icons/fa'

const Footer = () => {
  return <div className="">
    <div className=" bg-gradient-to-r from-primary to-secondary pt-24 pb-8 text-white">
      <div className=" container">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details  */}
          <div data-aos="fade-up" className=" space-y-6">
            <h1 className=" text-4xl font-bold">Apple Mint</h1>
            <p data-aos="fade-up" className=" text-sm max-w-[300px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, cum.</p>
          </div>
          {/* navLink section */}
          <div data-aos="fade-up">
            <h1 className="text-4xl font-bold">Quick Links</h1>
            <div data-aos="fade-up"data-aos-delay="300" className=" grid grid-cols-2 gap-3">
              {/* first links */}
              <div>
                <ul className=" space-y-2">
                 <li>
                  <a href="#">Home</a>
                 </li>
                 <li>
                  <a href="#">About</a>
                 </li>
                 <li>
                  <a href="#">contact</a>
                 </li>
                 <li>
                  <a href="#">Search Fruits</a>
                 </li>
                 <li>
                  <a href="#">Privacy Policy</a>
                 </li>
                </ul>
              </div>
              {/* second link */}
              <div>
                <ul className=" space-y-2">
                 <li>
                  <a href="#">Home</a>
                 </li>
                 <li>
                  <a href="#">About</a>
                 </li>
                 <li>
                  <a href="#">contact</a>
                 </li>
                 <li>
                  <a href="#">Search Fruits</a>
                 </li>
                 <li>
                  <a href="#">Privacy Policy</a>
                 </li>
                </ul>
              </div>
            </div>
          </div>
          {/* social section */}
          <div data-aos="fade-up" data-aos-delay="500">
            <h1 className=" text-4xl font-bold">Follow Us</h1>
            <div data-aos="fade-up">
              <p>+91 9550200164</p>
              <p> india, Andhra Pradesh</p>
            </div>
            <div data-aos="fade-up"data-aos-delay="700" className=" flex items-center gap-3">
              <FaFacebook className=" text-3xl hover:scale-105 duration-300"/>
              <FaInstagram className=" text-3xl hover:scale-105 duration-300"/>
              <FaTelegram className=" text-3xl hover:scale-105 duration-300"/>
              <FaGoogle className=" text-3xl hover:scale-105 duration-300"/>

            </div>
          </div>

        </div>

      </div>
    </div>
  </div>;
};

export default Footer;
