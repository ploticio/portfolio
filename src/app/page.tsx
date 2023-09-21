import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import ColorSwitch from "./components/ColorSwitch";
// import Ending from "./components/sections/Ending";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main
      style={{ display: "flex", flexDirection: "column", gap: "2.5rem", position: "relative", overflowX: "hidden" }}
    >
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* <Ending /> */}
      <Footer />
      <ColorSwitch />
    </main>
  );
}
