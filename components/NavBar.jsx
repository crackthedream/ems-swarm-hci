"use client";

import StaticLink from './StaticLink';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function NavBar() {
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      const initial = stored || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      setTheme(initial);
      if (initial === 'dark') document.documentElement.classList.add('dark');
    } catch (e) {}
  }, []);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
      document.documentElement.classList.toggle('dark', next === 'dark');
    } catch (e) {}
  }

  return (
    <header className="mb-10">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <StaticLink href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center font-bold shadow-md">E</div>
            <div>
              <div className="text-lg font-semibold text-navy dark:text-white">EMS Swarm HCI</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Directional EMS for UAV search</div>
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="space-x-6 text-sm text-slate-700 hidden md:flex dark:text-slate-300">
            <StaticLink 
              href="/" 
              className={`nav-link transition-colors ${
                pathname === '/' || pathname === '/ems-swarm-hci' ? 'text-navy dark:text-white font-semibold border-b-2 border-navy dark:border-white' : ''
              }`}
            >
              Home
            </StaticLink>
            <StaticLink 
              href="/system" 
              className={`nav-link transition-colors ${
                pathname === '/system' || pathname === '/ems-swarm-hci/system' ? 'text-navy dark:text-white font-semibold border-b-2 border-navy dark:border-white' : ''
              }`}
            >
              System
            </StaticLink>
            <StaticLink 
              href="/interaction" 
              className={`nav-link transition-colors ${
                pathname === '/interaction' || pathname === '/ems-swarm-hci/interaction' ? 'text-navy dark:text-white font-semibold border-b-2 border-navy dark:border-white' : ''
              }`}
            >
              Interaction
            </StaticLink>
            <StaticLink 
              href="/experiment" 
              className={`nav-link transition-colors ${
                pathname === '/experiment' || pathname === '/ems-swarm-hci/experiment' ? 'text-navy dark:text-white font-semibold border-b-2 border-navy dark:border-white' : ''
              }`}
            >
              Experiment
            </StaticLink>
            <StaticLink 
              href="/team" 
              className={`nav-link transition-colors ${
                pathname === '/team' || pathname === '/ems-swarm-hci/team' ? 'text-navy dark:text-white font-semibold border-b-2 border-navy dark:border-white' : ''
              }`}
            >
              Team
            </StaticLink>
          </div>

          <button 
            aria-label="Toggle theme" 
            onClick={toggleTheme} 
            className="px-3 py-1.5 rounded-md border bg-white/80 dark:bg-transparent dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden px-3 py-1.5 rounded-md border bg-white/80 dark:bg-transparent dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg">
          <div className="flex flex-col space-y-2">
            <StaticLink 
              href="/" 
              className={`nav-link text-base py-2 px-3 rounded transition-colors ${
                pathname === '/' || pathname === '/ems-swarm-hci' ? 'bg-slate-100 dark:bg-slate-700 text-navy dark:text-white font-semibold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </StaticLink>
            <StaticLink 
              href="/system" 
              className={`nav-link text-base py-2 px-3 rounded transition-colors ${
                pathname === '/system' || pathname === '/ems-swarm-hci/system' ? 'bg-slate-100 dark:bg-slate-700 text-navy dark:text-white font-semibold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              System
            </StaticLink>
            <StaticLink 
              href="/interaction" 
              className={`nav-link text-base py-2 px-3 rounded transition-colors ${
                pathname === '/interaction' || pathname === '/ems-swarm-hci/interaction' ? 'bg-slate-100 dark:bg-slate-700 text-navy dark:text-white font-semibold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Interaction
            </StaticLink>
            <StaticLink 
              href="/experiment" 
              className={`nav-link text-base py-2 px-3 rounded transition-colors ${
                pathname === '/experiment' || pathname === '/ems-swarm-hci/experiment' ? 'bg-slate-100 dark:bg-slate-700 text-navy dark:text-white font-semibold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Experiment
            </StaticLink>
            <StaticLink 
              href="/team" 
              className={`nav-link text-base py-2 px-3 rounded transition-colors ${
                pathname === '/team' || pathname === '/ems-swarm-hci/team' ? 'bg-slate-100 dark:bg-slate-700 text-navy dark:text-white font-semibold' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </StaticLink>
          </div>
        </div>
      </div>
    </header>
  );
}
