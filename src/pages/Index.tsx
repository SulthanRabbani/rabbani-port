
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <main className="min-h-screen flex flex-col">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
