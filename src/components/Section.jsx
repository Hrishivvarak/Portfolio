import React from 'react';

const Section = ({ id, children, className = "", fullHeight = true }) => (
  <section 
    id={id} 
    className={`${fullHeight ? 'min-h-screen py-20' : 'min-h-0 py-24'} flex flex-col justify-center relative z-10 scroll-mt-0 ${className}`}
  >
    {children}
  </section>
);

export default Section;