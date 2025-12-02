import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="font-sans scroll-smooth">
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
