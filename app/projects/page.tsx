"use client"
import { EstiaDemo } from "./estiaDemo"
import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Menu } from "@/components/menu/menu";
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

        ScrollTrigger.create({
            trigger: ".projects",
            snap: {
                snapTo: 1/4, // Snap to the closest half page
                duration: 1.5, // Animation duration for the snap
                ease: "power4.in", // Easing for the snap
            },
            scrub: true
        });

        gsap.set('.estia-info', {scale:0, opacity: 0})
        gsap.to('.estia-title', {
            scrollTrigger: {
                trigger: '.estia-container',
                start: 'top 60%',
                end: 'bottom 60%',
                toggleActions: "restart reverse restart reverse",
                onEnter: () => gsap.to('.estia-title', { scale: 2, duration: 1 }),
                onEnterBack: () => gsap.to('.estia-title', { scale: 2, duration: 1 }),
                onLeave: () => gsap.to('.estia-title', { scale: 1, duration: 1 }),
                onLeaveBack: () => gsap.to('.estia-title', { scale: 1, duration: 1 }),
            },
        })
        // gsap.set('.lorem', { autoAlpha: 0, scale: 0.8 })
        gsap.to('.estia-info', {
            scrollTrigger: {
                trigger: '.estia-container',
                start: 'top 60%',
                end: 'bottom 60%',
                markers:true,
                // toggleActions: "restart pause continue continue",
                onEnter: () => gsap.to('.estia-info', { 
                    autoAlpha: 1,
                    scale: 1,
                    duration: 2,
                    ease: 'power2.out'
                  }),
                onLeave: () => gsap.to('.estia-info', { 
                    autoAlpha: 0,
                    scale: 0, 
                    duration: 2,
                    ease: 'power2.inOut' 
                  }),
                onEnterBack: () => gsap.to('.estia-info', { // re enter from bottom
                    autoAlpha: 1,
                    scale: 1,
                    duration: 2,
                    ease: 'power2.inOut'
                }),
                onLeaveBack: () => gsap.to('.estia-info', { // fade from bottom
                    autoAlpha: 0,
                    scale: 0,
                    duration: 2,
                    ease: 'power2.inOut'
                })
        }})

        // gsap.to('.title', {
        //     scrollTrigger: {
        //         trigger: '.title',
        //         // pin: 'title',
        //         start: 'top 60%',
        //         end: 'top 40%',
        //         markers:true,
        //         toggleActions: "restart reverse restart reverse",
        //         snap: {
        //             snapTo: () => 0.5,
        //             duration: 0.3,
        //             ease: 'power4.inOut',
        //         },
        //         onEnter: () => gsap.to('.title', { scale: 2, duration: 1 }),
        //         onEnterBack: () => gsap.to('.title', { scale: 2, duration: 1 }),
        //         onLeave: () => gsap.to('.title', { scale: 1, duration: 1 }),
        //         onLeaveBack: () => gsap.to('.title', { scale: 1, duration: 1 }),
        //     },
        //     // scale: 2
        // })
        
        // gsap.to('.title2', {
        //     scrollTrigger: {
        //         trigger: '.title2',
        //         // pin: '.title2',
        //         start: 'top 80%',
        //         end: 'top 20%',
        //         markers:true,
        //         toggleActions: "restart reverse restart reverse",
        //         // snap: {
        //         //     snapTo: () => 0.5,
        //         //     ease: 'power4.inOut',
        //         // },
        //     },
        //     scale: 2,

        // })

    }, {scope: container})



    return (
        <div className="projects" ref={container}>

            <div className='h-screen w-screen bg flex flex-col items-center text-center justify-center'>
                <div className='text-white flex justify-self-center self-center text-7xl pt-40 pb-40 px-24'>Projects</div>
                <div className="scroll-down mt-20">Scroll Down</div>
                <div className="">&#8964;</div>
            </div>

            <div className='estia-container h-screen w-screen bg flex flex-col items-center text-center'>
                <div className="estia-title justify-self-center m-10 mt-28 text-xl ">Estia:</div>
                <div className="estia-info"><EstiaDemo/></div>
            </div>

            <div className='take-me-out-container h-screen w-screen bg flex flex-col items-center text-center'>
                <div className="take-me-out-title self-center justify-self-center m-10 mt-28 text-xl border">Take Me Out!:</div>
                <div className="take-me-out-info border"><Image src="/images/take-me-out.png" width={500} height={500} alt="Take me out"/></div>
            </div>
            
        </div>
    )
}