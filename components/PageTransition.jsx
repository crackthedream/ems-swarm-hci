"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
  exit: { opacity: 0, transition: { when: 'afterChildren' } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.18 } },
};

export default function PageTransition({ children }) {
  const path = usePathname();

  // Wrap direct children (sections, divs) with motion item to enable stagger
  const wrapped = React.Children.toArray(children).map((child, i) => {
    // If child is already a motion element, leave it
    if (React.isValidElement(child) && child.type && child.type.$$typeof) {
      return React.cloneElement(child, { key: i });
    }

    return (
      <motion.div key={i} variants={item}>
        {child}
      </motion.div>
    );
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {wrapped}
      </motion.div>
    </AnimatePresence>
  );
}
