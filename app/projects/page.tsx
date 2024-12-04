"use client"
import { EstiaDemo } from "./estiaDemo"
import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Menu } from "@/components/menu/menu";
gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(useGSAP);
// ScrollTrigger.normalizeScroll(true);
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

        gsap.to('.estia-title', {
            scrollTrigger: {
                trigger: '.estia-title',
                // pin: '.estia-title',
                start: 'top 80%',
                end: 'top 20%',
                markers:true,
                toggleActions: "restart reverse restart reverse",
                // scrub: true,
                // snap: {
                //     snapTo: () => 0.5,
                //     duration: 0.3,
                //     ease: 'power4.inOut',
                // },
                onEnter: () => gsap.to('.estia-title', { scale: 2, duration: 1 }),
                onEnterBack: () => gsap.to('.estia-title', { scale: 2, duration: 1 }),
                onLeave: () => gsap.to('.estia-title', { scale: 1, duration: 1 }),
                onLeaveBack: () => gsap.to('.estia-title', { scale: 1, duration: 1 }),
            },
            // scale: 2
        })
        // gsap.set('.lorem', { autoAlpha: 0, scale: 0.8 })
        gsap.to('.lorem', {
            scrollTrigger: {
                trigger: '.estia-title',
                // pin: '.estia-title',
                start: 'top 80%',
                end: 'top 20%',
                markers:true,
                toggleActions: "restart reverse restart reverse",
                onEnter: () => gsap.to('.lorem', { 
                    autoAlpha: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'power2.out'
                  }),
                onLeave: () => gsap.to('.lorem', { 
                    autoAlpha: 0,
                    scale: 0, 
                    duration: 1,
                    ease: 'power2.inOut' 
                  }),
                onEnterBack: () => gsap.to('.lorem', { // re enter from bottom
                    autoAlpha: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'power2.inOut'
                }),
                onLeaveBack: () => gsap.to('.lorem', { // fade from bottom
                    autoAlpha: 0,
                    scale: 0,
                    duration: 1,
                    ease: 'power2.inOut'
                })
        }})
        gsap.to('.title', {
            scrollTrigger: {
                trigger: '.title',
                // pin: 'title',
                start: 'top 60%',
                end: 'top 40%',
                markers:true,
                toggleActions: "restart reverse restart reverse",
                snap: {
                    snapTo: () => 0.5,
                    duration: 0.3,
                    ease: 'power4.inOut',
                },
                onEnter: () => gsap.to('.title', { scale: 2, duration: 1 }),
                onEnterBack: () => gsap.to('.title', { scale: 2, duration: 1 }),
                onLeave: () => gsap.to('.title', { scale: 1, duration: 1 }),
                onLeaveBack: () => gsap.to('.title', { scale: 1, duration: 1 }),
            },
            // scale: 2
        })
        
        gsap.to('.title2', {
            scrollTrigger: {
                trigger: '.title2',
                // pin: '.title2',
                start: 'top 80%',
                end: 'top 20%',
                markers:true,
                toggleActions: "restart reverse restart reverse",
                // snap: {
                //     snapTo: () => 0.5,
                //     ease: 'power4.inOut',
                // },
            },
            scale: 2,

        })

    }, {scope: container})



    return (
        <div className="content-center text-white m-10 p-10" ref={container}>
            <div className="bg-landing-bg cover">
                <div className='text-white flex justify-self-center self-center text-7xl pt-40 pb-40 px-24'>Projects</div>
                <div className="scroll-down">Scroll Down</div>
            </div>


            <div className='projects-container'>
            <div className="estia-title flex-1 justify-self-center flex-vertical m-10 mt-28 text-xl">
                    Estia: 
                    
            </div>
            <div className="lorem">
             <EstiaDemo/>
    </div>
            <div className="title flex-1 justify-self-center flex-vertical m-10 mt-24 text-xl">
                Take Me Out!:
                
            </div>
            <Image src="/images/take-me-out.png" width={500} height={500} alt="Take me out"/>
            <div className="title2 flex-1 justify-self-center flex-vertical m-10 mt-24 text-xl">
                Poop:
                {/* <Image src="/images/take-me-out.png" width={500} height={500} alt="Take me out"/> */}
            </div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ipsa id aperiam adipisci sint eveniet, culpa omnis, vel rem praesentium, maxime ullam ad quis in cupiditate quam tempore odit voluptatibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ipsa id aperiam adipisci sint eveniet, culpa omnis, vel rem praesentium, maxime ullam ad quis in cupiditate quam tempore odit voluptatibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ipsa id aperiam adipisci sint eveniet, culpa omnis, vel rem praesentium, maxime ullam ad quis in cupiditate quam tempore odit voluptatibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ipsa id aperiam adipisci sint eveniet, culpa omnis, vel rem praesentium, maxime ullam ad quis in cupiditate quam tempore odit voluptatibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ipsa id aperiam adipisci sint eveniet, culpa omnis, vel rem praesentium, maxime ullam ad quis in cupiditate quam tempore odit voluptatibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ipsa id aperiam adipisci sint eveniet, culpa omnis, vel rem praesentium, maxime ullam ad quis in cupiditate quam tempore odit voluptatibus.
            </div>
            
        </div>
    )
}