import About from "./components/sections/About";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />

      {/* Projects */}

      <section id="about">
        <About />
      </section>
      {/* Contact */}
    </main>
  );
}
