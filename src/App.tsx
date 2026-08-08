import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Projects />
      <Footer />
    </main>
  );
}