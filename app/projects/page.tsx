"use client"
import { EstiaDemo } from "./estiaDemo"
import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../background.css"

gsap.registerPlugin(ScrollTrigger);

import "./styles.css"

export default function Projects() {
    const container = useRef(null);
    const estia = useRef<any| null>(null);

    // const titles = document.querySelectorAll('title');

    // titles.forEach(( title ) => {
    //     let tl = gsap.timeline({ paused: true });
    //     tl.to('h1', {text: title.dataset.title, duration: 1}, 0.5)
    // })



    useGSAP(() => {
        ScrollTrigger.create ({
            
        })
    }, {scope: container})



    return (
        <div className="projects" ref={container}>

            <div className='h-screen w-screen bg flex flex-col items-center text-center justify-center'>
                <div className='text-white flex justify-self-center self-center text-7xl pt-40 pb-40 px-24'>Projects</div>
                <div className="scroll-down mt-20">Scroll Down</div>
                <div className="">&#8964;</div>
            </div>

            <div >
                <div>Wastely</div>
                <div></div>
            </div>
            <div className='estia-container h-screen w-screen bg flex flex-col items-center text-center'>
                <div className="estia-title justify-self-left text-white m-10 mt-28 text-3xl ">Estia</div>
                <div className="estia-info"><EstiaDemo/></div>
            </div>

            <div className='take-me-out-container h-screen w-screen bg flex flex-col items-center text-center'>
                <div className="take-me-out-title self-center justify-self-center m-10 mt-28 text-xl border">Take Me Out!:</div>
                <div className="take-me-out-info border"><Image src="/images/take-me-out.png" width={500} height={500} alt="Take me out"/></div>
            </div>
            
        </div>
    )
}