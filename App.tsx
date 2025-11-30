import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="bg-background min-h-screen text-slate-200 selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="py-12 text-center border-t border-white/5 bg-background text-textMuted">
        <div className="max-w-7xl mx-auto px-4">
           <p className="font-medium text-lg text-white mb-2">Saksham Agrawal</p>
           <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
      
      <ChatWidget />
    </div>
  );
}

export default App;