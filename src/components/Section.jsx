import React from 'react';

const Section = ({ id, children, className = "", fullHeight = true }) => (
  <section 
    id={id} 
    // If fullHeight is true, use 'min-h-screen'. If false, use 'min-h-0 py-24' to fit content naturally.
    className={`${fullHeight ? 'min-h-screen py-20' : 'min-h-0 py-24'} flex flex-col justify-center relative z-10 scroll-mt-0 ${className}`}
  >
    {children}
  </section>
);

export default Section;