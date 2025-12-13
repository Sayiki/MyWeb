import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Experience from "../src/components/Experience";
import Projects from "../src/components/Projects";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import Skills from "../src/components/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-[#EDEEF3] font-sans text-slate-700">
      <Navbar />
      <section id="home">
        <Hero />
        <Skills />
      </section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="blog"><Blog /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}
