import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="relative text-white">
      <Hero />

      <section id="about">
        <About />
      </section>

      {/* Projects */}
      {/* Skills */}
      {/* Contact */}
    </main>
  );
}
