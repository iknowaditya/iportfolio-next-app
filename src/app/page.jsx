import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Newslatter from "@/components/Newslatter";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <>
      <div className="xl:max-w-[1280px] w-full mx-auto scroll-smooth ">
        <FloatingNav navItems={navItems} />
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skill />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="testimonials">
          <Newslatter />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
