"use client";
import { useRef, useEffect, useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';


export default function Home() {

  const [time, setTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after hydration
  useEffect(() => {
    setMounted(true);
    setTime(new Date());
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [mounted]);

  // Get UK time components - only render after mounted
  const getTimeDisplay = () => {
    if (!mounted || !time) {
      return { hours: '--', minutes: '--', seconds: '--' };
    }
    
    const ukTime = new Date(time.toLocaleString('en-US', { timeZone: 'Europe/London' }));
    return {
      hours: ukTime.getHours().toString().padStart(2, '0'),
      minutes: ukTime.getMinutes().toString().padStart(2, '0'),
      seconds: ukTime.getSeconds().toString().padStart(2, '0')
    };
  };

  const { hours, minutes, seconds } = getTimeDisplay();

  return (
    <>

      <main className="h-full w-full flex flex-col md:flex-row">

        <aside className="flex flex-col gap-8 p-4 w-full shrink-0 items-start justify-start md:fixed md:left-0 md:top-0 md:h-screen md:overflow-y-auto md:max-w-xs">
      
            <div className='flex flex-col gap-4 lg:top-0 sticky top-0 h-full '>
              <h1 className="text-xl font-medium">Peter Ellis — Visual Designer and Developer  </h1>

              <div className='flex flex-row gap-1'>
                <span className='font-mono w-6 text-center'>{hours}</span><span className='text-slate-300'>|</span><span className='font-mono w-6 text-center'>{minutes}</span><span className='text-slate-300'>|</span><span className='font-mono w-6 text-center'>{seconds}</span>
                <span className='text-slate-400'>GMT+1</span>
              </div>


              <p>I partner with founders, enterprises and visionary startups leaveraging my full experience in design and development to create brands and experiences that drive growth and transformation.</p>

              <div className='flex flex-col sm:flex-row md:flex-col gap-4'>

                <div className='flex flex-col gap-4'>
                  <h2 className='text-sm font-medium'>Services</h2>
                </div>

                  <div className='flex flex-col'>
                    <ul className='flex flex-col gap-1'>
                      <li><p className='text-sm font-medium'>Product Design</p></li>
                      <li><p className='text-sm font-medium'>Visual Design</p></li>
                      <li><p className='text-sm font-medium'>Web Development</p></li>
                      <li><p className='text-sm font-medium'>UI/UX Design</p></li>
                      <li><p className='text-sm font-medium'>Webflow / Framer</p></li>
                      <li><p className='text-sm font-medium'>Visual Design</p></li>
                      <li><p className='text-sm font-medium'>No-Code Low Code Solutions</p></li>
                      <li><p className='text-sm font-medium'>Creative Strategy</p></li>
                      <li><p className='text-sm font-medium'>Video Editing</p></li>
                    </ul>
                  </div>


                  

                  <div className='flex flex-col gap-4'>
                    <h2 className='text-sm font-medium'>Work</h2>
                  </div>
                  
                  <div className='flex flex-col'>
                    <ul className='flex flex-col gap-3'>
                    <li>
                      
                      <p className='text-sm font-medium'>Founding Designer <span className='text-slate-400'>(UK, 2025)</span></p>
                        <p className='text-sm font-medium'>Super Useful Studio</p>
                      </li>
                      <li>
                      <p className='text-sm font-medium'>Product Design Lead <span className='text-slate-400'>(Germany, 2024)</span></p>
                        <p className='text-sm font-medium'>Mindfuel.ai</p>
                      </li>
                      <li>
                      <p className='text-sm font-medium'>Design Lead <span className='text-slate-400'>(Prague, 2020)</span></p>
                        <p className='text-sm font-medium'>McKinsey &amp; Co</p>
                      </li>
                      <li>
                      <p className='text-sm font-medium'>Product Design Lead <span className='text-slate-400'>(Denmark, 2018)</span></p>
                        <p className='text-sm font-medium'>Widex & Signia</p>
                      </li>
                     
                    </ul>
                  </div>

                </div>

               

               
            </div>

            <div className='mt-4 flex flex-col  sm:flex-row md:flex-col lg:flex-col  gap-4 bg-white z-90'>
                      <div className=''>
                        <a href="mailto:petermarkellis@gmail.com?subject=Project Inquiry" className="text-black bg-black rounded-full px-4 py-2 flex items-center gap-2 text-white w-fit">
                          <img src="/gmail.svg" alt="Signal" className="w-6 h-6" />
                          <span>Drop me a message</span>
                        </a>
                      </div>
                    
                      <div className=''>
                        <a href="https://signal.me/#eu/petermarkellis" target="_blank" rel="noopener noreferrer" className="text-black bg-[#3A76F0] rounded-full px-4 py-2 flex items-center gap-2 text-white w-fit">
                          <img src="/signal-logo.svg" alt="Signal" className="w-6 h-6" />
                          <span>Talk to me on Signal</span>
                        </a>
                    </div>
                  </div>

            

        </aside>


        {/* Vertically Scrollable panel with content  */}
        <section className="h-full w-full flex flex-col items-center overflow-y-auto justify-start gap-4 px-4 py-4 md:ml-80">    

          <div className='flex flex-col gap-4 max-w-[900px]'>
                
                <img src="/showcase/audibee.webp" alt="Audibee - Next Generation Sequence Sampling" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/mckinsey-1.webp" alt="UX and UI Design for McKinsey &amp; Co" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/grenadier.webp" alt="Everything is a Gen-Z financial app with rewarda and sharing" className="w-full h-full object-cover rounded-xl block select-none" />


                <img src="/showcase/mindfuel-7.webp" alt="UX and UI Design for Mindfuel" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/mindfuel-1.webp" alt="UX and UI Design for Mindfuel" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/mindfuel-9.webp" alt="UX and UI Design for Mindfuel" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/mindfuel-8.webp" alt="UX and UI Design for Mindfuel" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/mindfuel-6.webp" alt="UX and UI Design for Mindfuel" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/mindfuel-5.webp" alt="UX and UI Design for Mindfuel" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/widex-1.webp" alt="Widex Moment App Design and Build" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/widex-2.webp" alt="Widex Moment App Flow" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/widex-3.webp" alt="Widex iPad Promotional App" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/magnum-finance-1.webp" alt="Magnum Finance London" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/magnum-finance-2.webp" alt="Magnum Finance London" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/royal-exchange-manchester.webp" alt="Royal Exchange Manchester" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/obey.webp" alt="OBEY" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/hyundai.webp" alt="Hyundai N74 Website Concept" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/bupa.webp" alt="Bupa Promotional Design for Internal Bupa Associates" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/ascent-1.webp" alt="Ascent" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/marriot.webp" alt="Marriott Systems UI as part of the Notifai project" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/notifai.webp" alt="Air Quality Control System by the Team at Notifai" className="w-full h-full object-cover rounded-xl block select-none" />

                <img src="/showcase/everything-1.webp" alt="Everything is a Gen-Z financial app with rewarda and sharing" className="w-full h-full object-cover rounded-xl block select-none" />

            
          </div>

        </section>
      </main>

     

    </>
  );
}
