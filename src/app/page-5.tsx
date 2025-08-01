"use client";
import { useRef, useEffect } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { testimonials } from '../testimonials.js';

export default function Home() {
  const testimonialsScrollRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialsScrollRef.current) {
      const scrollAmount = 350; // Width of testimonial card + gap
      const currentScroll = testimonialsScrollRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      testimonialsScrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>


    <section className="h-full w-full relative">
    <h3 className="text-3xl">Peter Ellis</h3>
    <h1 className="">Freelance Product Designer</h1>
    <p>A Visual, Product and Design Engineer who fuses his background in both Design and Engineering to deliver exceptional user experiences.</p>
    </section>

    <section className="h-full w-full relative">
    <h3 className="">Brand I have worked with</h3>
    <ul>
      <li>Samsung</li>
      <li>Panasonic</li>
      <li>Everything</li>
      <li>Widex</li>
      <li>McKinsey and Co</li>
    </ul>
    </section>

    <section className="h-full w-full relative">
      <h2>Work</h2>

{/* Hero Case Study */}
      <div className="flex flex-col items-center justify-center">
        <div className='w-full h-full min-w-[300px] min-h-[300px] bg-slate-100'></div>
        <div className='flex flex-col items-left justify-left text-left'>
        <h3>Mindfuel</h3>
        <p>Introducing a new way to visualise connections.</p>
        </div>
      </div>

      {/* Additional Case Studies - Row on large, Column on small */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Case Study 2 */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div className='w-full h-full min-w-[300px] min-h-[300px] bg-slate-100'></div>
          <div className='flex flex-col items-left justify-left text-left'>
          <h3>Project Alpha</h3>
          <p>Reimagining digital experiences through innovative design solutions.</p>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div className='w-full h-full min-w-[300px] min-h-[300px] bg-slate-100'></div>
          <div className='flex flex-col items-left justify-left text-left'>
          <h3>Design System Pro</h3>
          <p>Building scalable design systems for enterprise applications.</p>
          </div>
        </div>
      </div>

      {/* Case Study */}
    </section>

    <section className="h-full w-full relative py-16">
      <h2 className="mb-8">What people say</h2>
      
      {/* Testimonials Horizontal Scroll Container */}
      <div 
        ref={testimonialsScrollRef}
        className="overflow-x-auto scrollbar-hide select-none"
      >
        <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
          
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-shrink-0 w-80 p-6 bg-white rounded-lg shadow-sm border">
              <div className="mb-4">
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Scroll Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => scrollTestimonials('left')}
          className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
          aria-label="Scroll testimonials left"
        >
          <IconChevronLeft size={20} className="text-gray-700" />
        </button>
        <button
          onClick={() => scrollTestimonials('right')}
          className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
          aria-label="Scroll testimonials right"
        >
          <IconChevronRight size={20} className="text-gray-700" />
        </button>
      </div>
    </section>



    
    </>
  );
}
