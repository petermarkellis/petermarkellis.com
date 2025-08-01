"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";

export default function ProjectClient({project, nextProject, prevProject}) {
    
    const projectNavRef = useRef(null);
    const progressBarRef = useRef(null);
    const projectDescriptionRef = useRef(null);
    const projectTitleRef = useRef(null);
    const footerRef = useRef(null);
    const nextProjectProgressBarRef = useRef(null);
    const footerKeepScrollingRef = useRef(null);

    const [isTransitioning, setIsTransitioning] = useState(false);
    const [shouldUpdateProgress, setShouldUpdateProgress] = useState(true);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.set(
            projectNavRef.current,
            {
                opacity: 0,
                y: -100
            }
        );

        // Initialize progress bars at 0
        gsap.set(progressBarRef.current, {
            scaleX: 0
        });
        gsap.set(nextProjectProgressBarRef.current, {
            scaleX: 0
        });


        gsap.to(
            projectNavRef.current,
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.25,
                ease: "power3.out",
            }
        );

        gsap.to(projectDescriptionRef.current,
            {
                opacity: 1,
                duration: 1,
                delay: 0.5,
                ease: "power3.out",

            }
        );


        const navScrollTrigger = ScrollTrigger.create({
            trigger: document.body,
            start: "top top+=5",
            end: "bottom bottom",
            scrub: true,
            markers: true,
            onUpdate: (self) => {
                if(progressBarRef.current){
                    gsap.set(progressBarRef.current, {
                        scaleX: self.progress
                    });
                    
                    // Update white text clipping to match progress
                    const whiteText = progressBarRef.current.parentElement.querySelector('.clip-path-progress');
                    if (whiteText) {
                        const clipValue = self.progress * 100;
                        whiteText.style.clipPath = `inset(0 ${100 - clipValue}% 0 0)`;
                    }
                }
            }
        });

        // Hide navigation when footer becomes visible in viewport
        const navHideScrollTrigger = ScrollTrigger.create({
            trigger: footerRef.current,
            start: "top top", // Hide nav when footer is 80% into viewport
            end: "top 20%",   // Show nav again when scrolling back up
            markers: true,
            onEnter: (self) => {
                if(projectNavRef.current && !isTransitioning){
                    gsap.to(projectNavRef.current, {
                        y: -100,
                        opacity: 0,
                        duration: 0.5,
                        ease: "power2.inOut",
                    });
                }
            },
            onLeaveBack: (self) => {
                if(projectNavRef.current && !isTransitioning){
                    gsap.to(projectNavRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: "power2.inOut",
                    });
                }
            }
        });

        // Pin footer and create smooth navigation to next project
        const footerScrollTrigger = ScrollTrigger.create({
            trigger: footerRef.current,
            start: "top top", // Start pinning when footer reaches top of viewport
            end: `+=${window.innerHeight * 0.8}`, // Shorter scroll distance - 80% of viewport height
            pin: true,
            pinSpacing: true, // Allow normal spacing so footer appears naturally first
            scrub: 1, // Add scrub for smooth progress
            markers: true,
            onUpdate: (self) => {
                // Only update progress bar if not transitioning
                if(nextProjectProgressBarRef.current && !isTransitioning){
                    gsap.set(nextProjectProgressBarRef.current, {
                        scaleX: self.progress
                    });
                }
                
                // Navigate when progress reaches 100%
                if (self.progress >= 0.99 && !isTransitioning) {
                    setIsTransitioning(true);
                    // Freeze the progress bar at 100% and fade it out
                    if(nextProjectProgressBarRef.current) {
                        gsap.set(nextProjectProgressBarRef.current, {
                            scaleX: 1
                        });
                        gsap.to(nextProjectProgressBarRef.current, {
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                        gsap.to(footerKeepScrollingRef.current, {
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                    setTimeout(() => {
                        window.location.href = `/projects/${nextProject.slug}`;
                    }, 200);
                }
            }
        });

        // Refresh ScrollTrigger after images load
        const refreshScrollTrigger = () => {
            ScrollTrigger.refresh();
        };

        // Wait for all images to load
        if (document.readyState === 'complete') {
            refreshScrollTrigger();
        } else {
            window.addEventListener('load', refreshScrollTrigger);
        }

        return () => {
            navScrollTrigger.kill();
            navHideScrollTrigger.kill();
            footerScrollTrigger.kill();
            window.removeEventListener('load', refreshScrollTrigger);
        };
        
    }, [nextProject.slug, isTransitioning, shouldUpdateProgress]);

    return (

        <ReactLenis root>
        <div className="project-page">
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
                <div ref={projectNavRef} className="project-nav opacity-0 flex items-center gap-4 rounded-lg px-6 py-3 max-w-2xl w-full mx-4">
                    <div className="link rounded-sm bg-slate-900 hover:bg-slate-800 text-white px-4 py-1">
                        <Link href={`/projects/${prevProject.slug}`}>Previous</Link>
                    </div>

                    <div className="project-page-scroll-progress relative flex-2 px-4 py-1 items-center rounded-sm border border-slate-200 text-slate-900 w-full overflow-hidden bg-slate-200/25 backdrop-blur-sm">
                        <p className="font-medium text-center relative z-10">{project.title}</p>
                        <p className="font-medium text-center absolute top-0 left-0 w-full h-full flex items-center justify-center text-white z-20 clip-path-progress" style={{clipPath: 'inset(0 100% 0 0)'}} ref={(el) => {
                            if (el) el.textContent = project.title;
                        }}></p>
                        <div ref={progressBarRef} className="project-page-scroll-progress-bar absolute top-0 left-0 w-full h-full bg-slate-800/70 transform scale-x-0 transition-all will-change-transform origin-left z-0"></div>
                    </div>

                    <div className="link rounded-sm bg-slate-900 hover:bg-slate-800 text-white px-4 py-1">
                        <Link href={`/projects/${nextProject.slug}`}>Next</Link>
                    </div>
                </div>
            </div>

            <div className="project-content">
                <div className="project-hero relative w-full h-screen flex justify-center align-center items-center">
                    <div className="project-hero-content">
                        <h1 ref={projectTitleRef} className="text-2xl sm:text-4xl lg:text-8xl xl:text-9xl text-center font-medium absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full">{project.title}</h1>
                        <p ref={projectDescriptionRef} className="text-lg opacity-0 absolute bottom-[10%] left-[50%] text-center transform -translate-x-1/2 -translate-y-1/2 p-4">{project.description}</p>
                    </div>
                </div>

                <div className="project-images w-full flex flex-col items-center gap-4">
                    {project.images.map((image, index) => (
                        <div key={index} className="project-content-image w-1/2 h-[50svh]">
                            <Image src={image} className="project-image object-fit w-full h-full" alt={project.title} width={1000} height={1000} />
                        </div>
                    ))}
                </div>

                <div ref={footerRef} className="project-footer  relative w-full h-screen flex flex-col justify-center align-center items-center">
                    <h1 className=" text-2xl sm:text-4xl lg:text-8xl xl:text-9xl  text-center font-medium absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full">{nextProject.title}</h1>

                    <div ref={footerKeepScrollingRef} className="absolute  top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full project-footer-title flex flex-col items-center justify-center gap-12">
                        <h2>Next Project</h2>
                        <h3 className="font-bold text-slate-500">Keep Scrolling for more</h3>
                    </div>

                    <div className="next-project-progress absolute bottom-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-1/2 bg-slate-200">
                        <div ref={nextProjectProgressBarRef} className="next-project-progress-bar absolute top-0 left-0 w-full h-full bg-slate-900 transform scale-x-0 transition-all will-change-transform origin-left -z-10"></div>
                    </div>
                </div>
            </div>
        </div>
        </ReactLenis>
    )
}