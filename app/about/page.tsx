"use client"
import "../background.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const container = useRef(null);
    // const tl = useRef<any| null>(null);
    

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ".page-1",
            snap: {
              snapTo: 1, // Snap to the closest half page
              duration: 0.75, // Animation duration for the snap
              ease: "power4.in", // Easing for the snap
            },
            scrub: true
          });
    }, {scope: container})

    return (
        <div ref={container}>
        <div className='h-screen w-screen bg flex flex-col items-center text-center justify-center'>
                <div className='text-white flex justify-self-center self-center text-7xl pt-40 pb-40 px-24'>About Me</div>
                <div className="scroll-down mt-20">Scroll Down</div>
                <div className="">&#8964;</div>
        </div>

        <div className="page-1 h-screen w-screen bg flex flex-col items-center text-center justify-center">
        <div className="text-white text-center content-center m-10 p-10 text-lg">
            My name is Anne Sun 👋🏻 and I'm a second year Computer Science student at the University of Waterloo!
            I do full-stack development, game development and machine learning/deep learning.
            I'm passionate about empowering women and underrepresented genders in STEM 
            through education and providing equitable oppurtunities in my role as a WiCS executive.
        </div>
        <div className="text-white content-start mx-10 px-10">
            Hobbies: 🧘🏻‍♀️ yoga, 😺 my 5 year old cat, 🧑🏻‍🎨 digital art, 🏊🏻‍♀️ swimming
        </div>
        </div>
        </div>
    )
}