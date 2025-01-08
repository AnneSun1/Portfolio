"use client"
import { NavBar } from '@/components/navbar';
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
    <div className='h-screen w-screen flex items-center text-center justify-center'>
      <NavBar/>
      <div><img src='/images/panda.png' style={{ height: '300px', width: '300px'}}></img></div>
     <div className='text-black flex flex-row justify-self-center self-center pt-40 pb-24 px-24'>
        
        <div className='text-7xl flex flex-row' ref={textRef}>
          
        </div>
        <div className='text-7xl' ref={cursorRef}></div>
        {/* <div className='text-4xl'>
          Welcome to my webpage ♡
        </div> */}
     </div>
     
    </div>
  );
}
