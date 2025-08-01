"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Page2() {

  const heroTextFirst = useRef(null);
  const heroTextSecond = useRef(null);
  const heroTextFirstContent = useRef(null);
  const heroTextSecondContent = useRef(null); 
  const heroImage = useRef(null);
  const heroImageContainer = useRef(null);

  useEffect(() => {

    // Function to run animations after page is loaded
    const runAnimations = () => {
      console.log("Running animations");
      const timeline = gsap.timeline();

              // Set containers to clip content
        gsap.set([heroTextFirst.current, heroTextSecond.current], {
          clipPath: "inset(100% 0% 0% 0%)",
          overflow: "hidden"
        });

        gsap.set([heroImageContainer.current], {
          width: "0px",
          clipPath: "inset(0% 100% 0% 0%)",
          overflow: "hidden"
        });

        // Set content initial positions
        gsap.set([heroTextFirstContent.current, heroTextSecondContent.current], {
          y: 150
        });

              // Animate containers to reveal content
        timeline.to(heroTextFirst.current, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "power3.out"
        });



        // Animate content sliding up
        timeline.to(heroTextFirstContent.current, {
          y: 0,
          duration: 0.5,
          ease: "power3.out"
        }, "-=0.8");

        // Animate second container and content
        timeline.to(heroTextSecond.current, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.5,
          ease: "power3.out"
        }, "-=0.6");

        timeline.to(heroTextSecondContent.current, {
          y: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.8");

        timeline.to(heroImage.current, {
          width: "190px",
          duration: 1.5,
          ease: "power3.out"
        }, "-=1");


        timeline.to([heroImageContainer.current], {
          width: "190px",
          clipPath: "inset(0% 0% 0% 0%)",
          overflow: "hidden",
          duration: 0.5,
 
        }, "-=0.9");

    };

    // Wait for page to be fully loaded
    if (document.readyState === 'complete') {
      console.log("Document is fully loaded");
      runAnimations();
    } else {
      const handleLoad = () => {
        runAnimations();
        window.removeEventListener('load', handleLoad);
      };
      window.addEventListener('load', handleLoad);
      
      // Cleanup function
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }

  }, []);

  return (
    <main className="container mx-auto">
   
      <div className="font-display text-9xl font-semibold flex flex-col">
        <h1 className="block hero-title-first overflow-hidden" style={{clipPath: "inset(100% 0% 0% 0%)"}} ref={heroTextFirst}>
          <div className="tracking-tighter uppercase leading-none" style={{transform: "translateY(150px)"}} ref={heroTextFirstContent}>Creative</div>
        </h1>
        
        <div className="flex flex-row gap-4">
       
        <div className="flex flex-col">
            <div className="flex flex-row overflow-hidden"  style={{clipPath: "inset(100% 0% 0% 0%)"}} ref={heroImageContainer}>
              <img src="/pixelimage.webp" alt="Hero Image" ref={heroImage} className="block heroimage rounded-lg" />
            </div>
        </div>

        <h1 className="block hero-title-second overflow-hidden flex flex-row" style={{clipPath: "inset(100% 0% 0% 0%)"}} ref={heroTextSecond}>
          <div className="tracking-tighter uppercase leading-none" style={{transform: "translateY(150px)"}} ref={heroTextSecondContent}>Designer</div>
        </h1>
       </div>
      </div>
     
     <Link href="/projects" className="text-2xl underline mt-8 block">All Projects</Link>


<div className="h-screen min-h-[1200px] bg-black text-white">
  content here
</div>
     
      
    </main>
  );
}
