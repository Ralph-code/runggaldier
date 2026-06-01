import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-wider text-teal-400 font-mono">RUNGGALDIER</span>
          <div className="space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="max-w-5xl mx-auto px-6 py-24 md:py-36 flex flex-col justify-center">
        <p className="text-teal-400 font-mono mb-3 text-sm tracking-widest animate-fade-in">WELCOME TO MY SPACE</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-50 tracking-tight mb-4">
          Hi, I'm Runggaldier.
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-400 mb-6">
          I shape digital experiences.
        </h2>
        <p className="max-w-xl text-slate-400 text-lg mb-8 leading-relaxed">
          I am a frontend software engineer focusing on building highly responsive, performant, and accessible web applications using React, Next.js, and Tailwind CSS.
        </p>
        <div>
          <a 
            href="#projects" 
            className="inline-block border-2 border-teal-400 text-teal-400 px-6 py-3 rounded font-medium hover:bg-teal-400/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore My Work
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center">
          <span className="text-teal-400 font-mono text-xl mr-2">01.</span> Selected Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-800 hover:border-teal-400/30 hover:bg-slate-800/60 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-400 transition-colors">Next.js Web Portal</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                A highly optimized, server-side rendered application with dynamic routing and complex layout components.
              </p>
            </div>
            <div className="flex gap-3 text-xs font-mono text-slate-400 pt-4">
              <span className="bg-slate-900 px-2 py-1 rounded">Next.js</span>
              <span className="bg-slate-900 px-2 py-1 rounded">Tailwind</span>
              <span className="bg-slate-900 px-2 py-1 rounded">TypeScript</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-800 hover:border-teal-400/30 hover:bg-slate-800/60 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-400 transition-colors">Tailwind CSS Toolkit</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                A custom-built aesthetic library featuring seamless dark-mode toggling, crisp typography, and reusable custom layouts.
              </p>
            </div>
            <div className="flex gap-3 text-xs font-mono text-slate-400 pt-4">
              <span className="bg-slate-900 px-2 py-1 rounded">React</span>
              <span className="bg-slate-900 px-2 py-1 rounded">Tailwind</span>
              <span className="bg-slate-900 px-2 py-1 rounded">ESLint</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="max-w-5xl mx-auto px-6 py-16 text-center text-slate-500 border-t border-slate-800">
        <h3 className="text-2xl font-bold text-slate-200 mb-4">Let's Connect</h3>
        <p className="mb-6 max-w-sm mx-auto text-sm text-slate-400">
          I'm currently looking for new opportunities. Drop an email if you want to collaborate!
        </p>
        <a 
          href="mailto:your.email@example.com" 
          className="text-teal-400 hover:underline font-mono text-sm block mb-12"
        >
          your.email@example.com
        </a>
        <p className="text-xs">© {new Date().getFullYear()} Runggaldier. Built from scratch.</p>
      </footer>
    </div>
  );
}