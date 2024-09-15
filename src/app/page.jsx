import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Newslatter from "@/components/Newslatter";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import { BackgroundBeams } from "../components/ui/background-beams";

export default function Home() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="h-screen w-full absolute top-0 left-0 flex items-center justify-center ">
          <BackgroundBeams />
        </div>
        <div className="xl:max-w-[1280px] w-full mx-auto scroll-smooth  ">
          <FloatingNav navItems={navItems} />

          <HeroSection />

          <About />

          <Skill />

          <Projects />

          <Experience />

          <Newslatter />

          <Contact />
        </div>
      </main>
    </>
  );
}
