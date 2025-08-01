"use client";
import { useRef, useEffect } from 'react';

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Update scroll position
      scrollPosition.current += e.deltaY;
      
      // Apply transforms to each section
      updateSectionPositions();
    };

    const updateSectionPositions = () => {
      const scroll = scrollPosition.current;
      
      if (section1Ref.current) {
        section1Ref.current.style.transform = `translate3d(0, ${-scroll}px, 0)`;
      }
      
      if (section2Ref.current) {
        section2Ref.current.style.transform = `translate3d(0, ${-scroll}px, 0)`;
      }
      
      if (footerRef.current) {
        footerRef.current.style.transform = `translate3d(0, ${-scroll}px, 0)`;
      }
    };

    const handleClick = () => {
      // You can customize this behavior - for now, reset to top
      scrollPosition.current = 0;
      updateSectionPositions();
    };

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    // Add click listener to footer
    if (footerRef.current) {
      footerRef.current.addEventListener('click', handleClick);
    }

    // Initial position update
    updateSectionPositions();

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (footerRef.current) {
        footerRef.current.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <div 
      ref={scrollContainerRef} 
      className="fixed top-0 left-0 w-full h-full overflow-hidden"
    >
      <section ref={section1Ref} className="absolute top-0 left-0 h-[400px] w-full bg-slate-500 flex items-center justify-center">
        <h1 className="text-white text-center text-6xl font-bold">
          TITLE
        </h1>
      </section>

      <section ref={section2Ref} className="absolute top-[400px] left-0 min-h-screen w-full bg-slate-300 flex items-center justify-center py-20">
        <h1 className="text-black text-center text-6xl font-bold">
          CONTENT
        </h1>
      </section>

      <footer ref={footerRef} className="absolute top-[calc(400px+100vh+160px)] left-0 h-[400px] w-full bg-slate-500 flex items-center justify-center cursor-pointer">
        <h1 className="text-white text-center text-6xl font-bold">
          CLICK TO RESET
        </h1>
      </footer>
    </div>
  );
}
