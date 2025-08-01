
"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Footer() {
    const scrollingTextRef = useRef(null);

    // ===== SPEED CONFIGURATION VARIABLES =====
    const MARQUEE_CONFIG = {
        baseSpeed: 0.5,           // Base speed of marquee (higher = faster)
        scrollSpeedMultiplier: 2, // How much faster when scrolling (3x default)
        speedTransitionDuration: 0.25, // How fast speed changes (seconds)
        slowdownDuration: 1.5,  // How long to slow back down (seconds)
        slowdownDelay: 0.5,     // Delay before slowing down (seconds)
    };

    useEffect(() => {
        // Add a small delay to ensure DOM is ready
        const timer = setTimeout(() => {
            try {
                console.log("Initializing Footer ScrollTrigger");
                
                // Register ScrollTrigger plugin
                gsap.registerPlugin(ScrollTrigger);
                
                // Refresh ScrollTrigger to work with Lenis
                ScrollTrigger.refresh();

                // Check for reduced motion
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                
                if (prefersReducedMotion) {
                    console.log("Scroll marquee animations skipped due to prefers-reduced-motion");
                    return;
                }

                const scrollingTextElements = gsap.utils.toArray('.rail h4');
                console.log("Found scrolling text elements:", scrollingTextElements.length);

                if (scrollingTextElements.length === 0) {
                    console.log("No scrolling text elements found");
                    return;
                }

                const tl = horizontalLoop(scrollingTextElements, {
                    repeat: -1,
                    speed: MARQUEE_CONFIG.baseSpeed,
                });

                console.log("Horizontal loop timeline created");

                let speedTween;

                ScrollTrigger.create({
                    trigger: ".scrolling-text",
                    start: "top bottom", 
                    end: "bottom top",
                    onUpdate: (self) => {
                        speedTween && speedTween.kill();
                        speedTween = gsap.timeline()
                        .to(tl, {
                            timeScale: MARQUEE_CONFIG.scrollSpeedMultiplier * self.direction,
                            duration: MARQUEE_CONFIG.speedTransitionDuration
                        })
                        .to(tl, {
                            timeScale: 1 * self.direction,
                            duration: MARQUEE_CONFIG.slowdownDuration
                        }, `+=${MARQUEE_CONFIG.slowdownDelay}`)
                    },
                });

                console.log("ScrollTrigger created successfully");

                // Cleanup
                return () => {
                    console.log("Cleaning up ScrollTrigger");
                    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                    tl.kill();
                };

            } catch (error) {
                console.error("Error initializing ScrollTrigger:", error);
            }
        }, 100);

        return () => {
            clearTimeout(timer);
        };

    }, []);

    // horizontalLoop helper function from GSAP
    const horizontalLoop = (items, config) => {
        items = gsap.utils.toArray(items);
        config = config || {};
        let tl = gsap.timeline({
                repeat: config.repeat, 
                paused: config.paused, 
                defaults: {ease: "none"}, 
                onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
            }),
            length = items.length,
            startX = items[0].offsetLeft,
            times = [],
            widths = [],
            xPercents = [],
            curIndex = 0,
            pixelsPerSecond = (config.speed || 1) * 100,
            snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
            totalWidth, curX, distanceToStart, distanceToLoop, item, i;

        gsap.set(items, {
            xPercent: (i, el) => {
                let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
                xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
                return xPercents[i];
            }
        });

        gsap.set(items, {x: 0});
        totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
        
        for (i = 0; i < length; i++) {
            item = items[i];
            curX = xPercents[i] / 100 * widths[i];
            distanceToStart = item.offsetLeft + curX - startX;
            distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
            tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
              .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
              .add("label" + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
        }

        function toIndex(index, vars) {
            vars = vars || {};
            (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
            let newIndex = gsap.utils.wrap(0, length, index),
                time = times[newIndex];
            if (time > tl.time() !== index > curIndex) {
                vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
                time += tl.duration() * (index > curIndex ? 1 : -1);
            }
            curIndex = newIndex;
            vars.overwrite = true;
            return tl.tweenTo(time, vars);
        }

        tl.next = vars => toIndex(curIndex+1, vars);
        tl.previous = vars => toIndex(curIndex-1, vars);
        tl.current = () => curIndex;
        tl.toIndex = (index, vars) => toIndex(index, vars);
        tl.times = times;
        tl.progress(1, true).progress(0, true);
        
        if (config.reversed) {
            tl.vars.onReverseComplete();
            tl.reverse();
        }
        return tl;
    };

            return (
        <>

            {/* Scrolling Text Section */}
            <div className="scrolling-text overflow-hidden w-full h-full min-h-[600px] flex items-center bg-black fixed bottom-0 left-0 z-0" ref={scrollingTextRef}>
                <div className="rail flex">
                    <h4 className="whitespace-nowrap text-9xl font-medium tracking-tight leading-none mr-8 text-white">
                        Design Excellence
                    </h4>
                    <h4 className="whitespace-nowrap text-9xl font-bold tracking-tight leading-none mr-8 text-white">
                        Creative Development
                    </h4>
                    <h4 className="whitespace-nowrap text-9xl font-medium tracking-tight leading-none mr-8 text-white">
                        Digital Innovation
                    </h4>
                    <h4 className="whitespace-nowrap text-9xl font-bold tracking-tight leading-none mr-8 text-white">
                        User Experience
                    </h4>
                </div>
            </div>

        </>
    )
}