import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import ColorSwitch from "./components/ColorSwitch";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 relative overflow-x-hidden">
      <Hero />
      {/* <div className="w-full h-4 bg-red-700 z-50"></div> */}
      <section id="about">
        <About />
      </section>
      {/* <div className="w-full h-4 bg-red-700 z-50"></div> */}
      <section id="projects">
        <Projects />
      </section>
      {/* <div className="w-full h-4 bg-red-700 z-50"></div> */}
      <section id="contact">
        <Contact />
      </section>
      <ColorSwitch />
    </main>
  );
}
