"use client"
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from "./TabButtons"

const TAB_DATA = [
  {
    title : "Skills",
    id : "skills",
    content : (
      <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>Express</li>
        <li>React.js</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
      </ul>
    )
  },
  {
    title : "Education",
    id : "education",
    content : (
      <ul className='list-disc pl-2'>
        <li>Diploma</li>
        <li>From Government Polytechnic Purnea</li>
      </ul>
    )
  },
  {
    title : "Experience",
    id : "experience",
    content : (
      <ul className='list-disc pl-2'>
        <li>Fresher</li>
        <li>From Government Polytechnic Purnea</li>
      </ul>
    )
  }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };


  return (
    <section className='bg-white text-black mt-2 rounded-xl'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16'>
            <Image src="/images/about-image.png" width={500} height={500} alt='About Image' />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-black mb-4 mt-5'>About Me</h2>
                <p className='text-base lg:text-lg '>
                    I am a full stack web developer with a passion
                    for creating intractive design Lorem ipsum dolor 
                    sit, amet consectetur adipisicing elit. Commodi 
                    asperiores laudantium adipisci facilis odit, alias 
                    ipsa error recusandae accusantium, aut consequuntur, 
                    est temporibus soluta?
                </p>
                
                <div className='flex flex-row justify-start mt-8'>
                  <TabButton 
                    selectTab={() => handleTabChange("skills")} 
                    active = {tab === "skills"}
                  >
                    {" "}
                    Skills{" "} 
                  </TabButton>

                  <TabButton 
                    selectTab={() => handleTabChange("education")} 
                    active = {tab === "education"}
                  >
                    {" "}
                    Education{" "} 
                  </TabButton>

                  <TabButton 
                    selectTab={() => handleTabChange("experience")} 
                    active = {tab === "experience"}
                  >
                    {" "}
                    Experience{" "} 
                  </TabButton>
                </div>
                <div className='mt-8 '>
                  {TAB_DATA.find((t) => t.id === tab).content}

                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
