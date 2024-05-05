"use client"
import React, { useTransition, useState } from 'react';
import { useEffect } from "react";
import Image from 'next/image';
import CertificatesDesc from './CertificatesDesc';
import { images } from "./CertificateList";


const CertificatesSection = () => {
    const [activeImage, setActiveImage] = useState(0);

    const clickNext = () => {
        activeImage === images.length - 1
            ? setActiveImage(0)
            : setActiveImage(activeImage + 1);
    };
    const clickPrev = () => {
        activeImage === 0
            ? setActiveImage(images.length - 1)
            : setActiveImage(activeImage - 1);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            clickNext();
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [activeImage]);


    return (
        <section className='bg-[#181818] text-whitw mt-2 rounded-xl' id='certificates'>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6 md:mb-6 underline underline-offset-4 ">
                My Certificates
            </h2>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-16 sm:py-16 xl:py-4'>
                <div
                    className={` transition-transform ease-in-out duration-500`}
                >
                    {images.map((pic, idx) => (
                        <div
                            className={`${idx === activeImage
                                    ? 'block transition-all duration-500 ease-in-out'
                                    : 'hidden'
                                }`}
                            key={idx}
                        >
                            <Image
                                src={pic.src}
                                alt="Certificate image"
                                width={500}
                                height={500}

                            />

                        </div>
                    ))}
                </div>

                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <CertificatesDesc
                        activeImage={activeImage}
                        clickNext={clickNext}
                        clickPrev={clickPrev}
                    />
                
                </div>
            </div>
        </section>
    )
}

export default CertificatesSection
