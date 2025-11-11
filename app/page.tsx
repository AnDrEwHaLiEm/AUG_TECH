import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
