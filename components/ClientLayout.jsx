"use client";

import ScrollToTop from './ScrollToTop';
import ScrollProgress from './ScrollProgress';

export default function ClientLayout({ children }) {
  return (
    <>
      <ScrollProgress />
      {children}
      <ScrollToTop />
    </>
  );
}

