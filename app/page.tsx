import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import HackathonsAndContests from "@/components/Hackathons";
import Hero from "@/components/Hero";
import NavbarComp from "@/components/NavbarComp";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";


export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavbarComp/>
        <About/>
        <WorkExperience/>
        <Education/>
        <Projects/>
        <HackathonsAndContests/>
        <ContactMe/>
        <Hero/>
      </div>
    </main>
  );
}
