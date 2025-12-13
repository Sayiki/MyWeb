import Head from "next/head";
import Navbar from "../components/Navbar.jsx"; 
import Hero from "../components/Hero.jsx";
import Experience from "../components/Experience.jsx";
import Projects from "../components/Projects.jsx";
import Blog from "../components/Blog.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Skills from "../components/Skills.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arzaq Ajradika | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  );
}
