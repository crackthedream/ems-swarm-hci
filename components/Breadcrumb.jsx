"use client";

import StaticLink from './StaticLink';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items = [] }) {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    ...items
  ];

  return (
    <nav className="mb-6 text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
        {breadcrumbs.map((item, index) => (
          <li key={item.href || index} className="flex items-center">
            {index > 0 && <ChevronRight size={16} className="mx-2" />}
            {index === 0 ? (
              <StaticLink href={item.href} className="flex items-center hover:text-navy dark:hover:text-white transition-colors">
                <Home size={16} className="mr-1" />
                <span>{item.label}</span>
              </StaticLink>
            ) : index === breadcrumbs.length - 1 ? (
              <span className="text-navy dark:text-white font-medium">{item.label}</span>
            ) : (
              <StaticLink href={item.href} className="hover:text-navy dark:hover:text-white transition-colors">
                {item.label}
              </StaticLink>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

