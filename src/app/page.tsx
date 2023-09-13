import About from "./components/About";
import ColorSwitch from "./components/ColorSwitch";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />

      <section id="about">
        <About />
        <ColorSwitch />
      </section>

      {/* Projects */}
      {/* Skills */}
      {/* Contact */}
    </main>
  );
}
