import React from "react";
import AboutImg from "../assets/About.png";
import { FaChevronRight } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="py-20 px-[15px] bg-gray-900 z-50 text-gray-300">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="text-4xl md:text-5xl font-bold mb-11 text-center hover:text-[#27ae60] transition-colors">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-20 items-center">
          {/* paragraph section */}
          <div className="p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-[#27ae60]">
            <p className="text-lg leading-7 mb-6">
              Hello! I am Muxtarov Mansurbek, an enthusiastic Full-Stack
              Developer. I have a strong foundation in modern web development
              and pay attention to every detail. I create elegant and
              user-friendly web solutions tailored to meet the needs of clients.
            </p>
            <p className="text-lg leading-7 mb-6">
              My journey into technology began with a background outside of IT,
              and I have embraced every challenge, continuously developing my
              skills, solving problems, and learning to work in teams. I am
              always ready to learn new technologies and seek new opportunities,
              striving to deliver cutting-edge web experiences.
            </p>
            <div className="mt-5">
              <h1 className="font-bold text-2xl mb-5 text-[#27ae60]">
                My Skills
              </h1>
              <div className="flex flex-wrap gap-4 mb-5 text-sm">
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:bg-[#27ae60] hover:text-white transition-colors">
                  Html
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:bg-[#27ae60] hover:text-white transition-colors">
                  Git
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:bg-[#27ae60] hover:text-white transition-colors">
                  Github
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:bg-[#27ae60] hover:text-white transition-colors">
                  CSS
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:bg-[#27ae60] hover:text-white transition-colors">
                  Bootstraf
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:bg-[#27ae60] hover:text-white transition-colors">
                  Javascript
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:bg-[#27ae60] hover:text-white transition-colors">
                  React
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:bg-[#27ae60] hover:text-white transition-colors">
                  Vue.js
                </p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:bg-[#27ae60] hover:text-white transition-colors">
                  Node.js
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
