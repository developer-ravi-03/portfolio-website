import React from 'react'
import Image from 'next/image';
import { images } from "./CertificateList";
import left from "../../../public/left.svg";
import right from "../../../public/right.svg";



const CertificatesDesc = ({ activeImage, clickNext, clickPrev }) => {
  return (
    <div className='relative'>
      {images.map((element, idx) => (
        <div
          className={
            idx === activeImage
              ? `block transition-all duration-500 ease-in-out`
              : 'hidden'
          }
          key={idx}
        >

          <div className='text-4xl font-bold text-white mb-4 mt-5'>
            {element.title}
          </div>
          <p className="text-base lg:text-lg italic text-white">
            {element.desc}
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <button className='sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondry-500 hover:bg-slate-800 text-white hover:text-[#3a3939] uppercase px-4 py-2 mt-14 mb-4'>
              See More
            </button>
          </div>


          <div className='absolute bottom-1 w-full flex justify-center items-center '>
            <div
              className="absolute bottom-4 right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <Image src={left} alt="left" />
            </div>

            <div
              className="absolute bottom-4 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <Image src={right} alt="right" />
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default CertificatesDesc
