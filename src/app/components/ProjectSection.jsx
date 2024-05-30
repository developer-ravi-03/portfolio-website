"use client";
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Hostel Management System",
    description: "This is a Hostel Management system website using PHP and mySQL.",
    image: "/images/projects/1.HMS.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Dance Academy Website",
    description: "This is dance academy webpage only design idea in this.",
    image: "/images/projects/2.Dance-Academy-webpage.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "My Portfolio",
    description: "This is My Portfolio website. It is designed with Next.js",
    image: "/images/projects/3.My-Portfolio.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/developer-ravi-03/portfolio-website",
    previewUrl: "https://portfolio-website-next-hazel.vercel.app/",
  },
  {
    id: 4,
    title: "To-Do-List",
    description: "This website is designed by using Angular.js",
    image: "/images/projects/4.To-Do-List-angular.png",
    tag: ["All", "web"],
    gitUrl: "https://github.com/developer-ravi-03/to-do-list-Angular",
    previewUrl: "https://to-do-list-angular-teal.vercel.app/",
  },
  {
    id: 5,
    title: "Food Ordering Template",
    description: "This is only template.",
    // description: "Authentication and CRUD operations",
    image: "/images/projects/5.food-Oredring-Webpage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/developer-ravi-03/Food-Delivery-Website-Design",
    previewUrl: "https://food-delivery-website-design-dghp8psuw.vercel.app/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6 md:mb-6" id='projects'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag 
          onClick={handleTagChange} 
          name="All" 
          isSelected={tag === "All"}
        />

        <ProjectTag 
          onClick={handleTagChange} 
          name="Web" 
          isSelected={tag === "Web"}
        />

        <ProjectTag 
          onClick={handleTagChange} 
          name="Mobile" 
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image} 
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  )
}

export default ProjectSection
