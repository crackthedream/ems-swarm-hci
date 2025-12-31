"use client";

import { useState, useEffect } from 'react';
import { List } from 'lucide-react';

export default function MiniToc({ sections = [] }) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (sections.length === 0) return;

    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <aside className="hidden lg:block fixed right-8 top-32 w-52 z-40">
      <nav className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg text-sm">
        <div className="font-semibold mb-3 flex items-center gap-2 text-navy dark:text-white">
          <List size={16} />
          <span>On this page</span>
        </div>
        <ul className="space-y-1.5">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                className={`block py-1.5 px-2 rounded transition-colors ${
                  activeSection === s.id
                    ? 'text-navy dark:text-white bg-slate-100 dark:bg-slate-700 font-medium'
                    : 'text-slate-600 dark:text-slate-400 hover:text-navy dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50'
                }`}
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(s.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
