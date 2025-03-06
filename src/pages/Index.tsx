
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
        <div className="min-h-screen flex flex-col relative bg-tech-pattern dark:bg-black/90">
          {/* Layered background effects */}
          <div className="fixed inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-10 dark:opacity-20 pointer-events-none"></div>
          <div className="fixed top-[20%] -left-1/4 w-3/4 h-3/4 bg-purple-400/10 rounded-full blur-3xl dark:bg-purple-900/10 pointer-events-none"></div>
          <div className="fixed bottom-[10%] -right-1/4 w-3/4 h-3/4 bg-purple-400/10 rounded-full blur-3xl dark:bg-purple-900/10 pointer-events-none"></div>
          
          <Navbar />
          <main className="flex-grow z-10">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
