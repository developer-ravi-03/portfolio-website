"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-6 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondry-600 '>
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Ravi',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                1000,
                'UI/UX Designer',
                1000,
                'Backend Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Lorem ipsum dolor sit amet, consectetur elit. Esse earum hic perspiciatis ratione, cumque iste. Quo sed iste autem beatae recusandae corrupti maxime quam numquam.
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondry-500 hover:bg-slate-200 text-white hover:text-[#181818]'>
              Hire Me
            </button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondry-500 hover:bg-slate-800 text-white  mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-6 place-self-center mt-4 mb-6 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] relative">
            <Image
              src="/images/hero-image.png"
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={350}
              height={350}
            />

          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
