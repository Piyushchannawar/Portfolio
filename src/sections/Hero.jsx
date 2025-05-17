import HeroImg from '../assets/portimg.png';
import React from 'react';

function Hero() {
  return (
    <section id="home">
      <div className="z-40">
        <div className="container h-screen flex items-center justify-center text-center">
          <div className="max-w-[800px] mx-auto">
            {/* 3D Image */}
            <div className="relative w-64 mx-auto mb-6">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 blur opacity-70 animate-pulse z-[-1]"></div>
              <img className="w-full h-auto drop-shadow-xl animate-float" src={HeroImg} alt="hero" />
            </div>

            {/* Content */}
            <h1 className="mb-2 text-3xl font-extrabold capitalize leading-[1.2] md:text-5xl">
              I code. I automate. I deploy. Full Stack | DevOps | AWS
            </h1>
            <p className="mb-4 text-lg text-gray-600">Crafting clean code and building scalable systems</p>
            <a
              className="px-6 py-3 inline-block capitalize font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md"
              href="#projects"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
