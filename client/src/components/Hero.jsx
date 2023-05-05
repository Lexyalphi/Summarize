import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='summarize_logo' className='w-28 object-contain' />

      </nav>

      <h1 className='head_text'>
        <span className="orange_gradient">Summarize</span>
      </h1>
      <h2 className='desc'>
      Enhance your reading experience with an open-source tool that converts long articles 
      into clear and succinct summaries for your convenience.
      </h2>
    </header>
  );
};

export default Hero;