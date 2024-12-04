"use client"
import { EstiaDemo } from "./estiaDemo"
import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Projects() {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll(true)
    const container = useRef(null);
    useGSAP(() => {
        gsap.to('.estia-title', {
            scrollTrigger: {
                trigger: '.estia-title',
                toggleActions: "restart pause reverse pause"
            },
            rotation: 360,
            durations: 3,
            y: 1000
        })
    }, {scope: container})



    return (
        <div className="content-center text-white m-10 p-10">
            <div className='text-white flex justify-self-center self-center text-7xl pt-40 pb-40 px-24'>Projects</div>
            <div className="flex-1 flex-vertical m-10 mt-28 text-xl estia-title">
                    Estia: <EstiaDemo/>
                    
                </div>
                <div className="flex-1 flex-vertical m-10 mt-24 text-xl">
                    Take Me Out!:
                    <Image src="/images/take-me-out.png" width={500} height={500} alt="Take me out"/>
                </div>

        </div>
    )
}