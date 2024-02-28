import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import CertificatesSection from "./components/CertificatesSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
// import AchevmentsSection from "./components/AchievmentsSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        {/* if we add AchievmentsSection than we need to increace hero section heighy from 6xl to 8 xl */}
        {/* <AchevmentsSection/> */}
        <AboutSection/>
        <CertificatesSection/>

        <ProjectSection/>
        <EmailSection/>
        
      </div>
      <Footer/>
    </main>
  );
}
