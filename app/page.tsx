"use client"
import { NavBar } from '@/components/navbar/navbar';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";
import { cursorTo } from 'readline';

gsap.registerPlugin(TextPlugin);

export default function Home() {
  const title = ["Welcome♡", "I'm Anne!"]
  const textRef = useRef(null);
  const cursorRef= useRef(null);

  useEffect(() => {
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true, // flashes opacity on and off
      duration: 0.5,
      ease: "power2.inOut"
    })
  })
  

  useEffect(() => {
    let tl = gsap.timeline({repeat: -1});

    title.forEach((word) => {
      let tlText = gsap.timeline({repeat: 1, yoyo: true})
      tlText.to(textRef.current, {
        duration: 1,
        text: word
      })
      tl.add(tlText)
    })
    
  }, [])

  
  return (
    <div className='h-screen w-screen flex items-center text-center justify-center flex-wrap'>
      <NavBar/>
      {/* <div className='absolute top-20'><img src='/images/panda.png' className=' h-[150px] md:h-[300px]'></img></div> */}
      <div className='text-black flex flex-row justify-self-center self-center'>
      
      <div className='md:text-7xl text-3xl flex flex-row' ref={textRef}></div>
        {/* <div className='text-7xl' ref={cursorRef}></div> */}
     </div>
     
    </div>
  );
}
