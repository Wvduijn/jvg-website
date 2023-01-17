// Framewrok specific
import React, { ReactNode } from 'react';
import Head from 'next/head';

// Framer Motion
import { motion } from 'framer-motion';

interface Props {
  children?: ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: -200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
        
      >
      
        {children}
       
      </motion.main>
    </>
  );
};

export default MainLayout;
