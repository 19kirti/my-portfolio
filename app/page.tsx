import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import HackathonsAndContests from "@/components/Hackathons";
import Hero from "@/components/Hero";
import NavbarComp from "@/components/NavbarComp";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";


export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-10">
      <div className="max-w-7xl w-full">
        <NavbarComp/>
        <About/>
        <WorkExperience/>
        <Skills/>
        <Education/>
        <Projects/>
        <HackathonsAndContests/>
        <ContactMe/>
        
        <Hero/>
        <Footer/>
      </div>
    </main>
  );
}
