"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import "./menu.css";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";

export function Menu (){
    const container = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const tl = useRef<any| null>(null);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useGSAP(() => {
        gsap.set('.nav-links', {y: 75});
        tl.current = gsap.timeline({paused: true})
            .to(".nav-overlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
            })
            .to(".nav-overlay", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: 0
            });

    }, {scope: container})


    useEffect(() => {
        if(isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen])

    return (
        <div className="z-[1] absolute text-xl text-black " ref={container}>
                <div className="mt-10 mx-10 p-2 cursor-pointer text-black" onClick={toggleMenu}>
                    &#8801; Menu
                </div>
                <div className="nav-overlay ">
                    <div className="cursor-pointer flex flex-col justify-between" onClick={toggleMenu}>
                        <div className="mt-10 mx-10 p-2 self-start">&#x2715; Close</div>
                        <div className="m-10 cursor-pointer self-end text-bottom text-8xl">&#x2715;</div>
                    </div>
                    <div className="flex flex-col self-end mb-10">
                        <Link href="https://www.linkedin.com/in/sunanne/" className="hover:underline hover:underline-offset-4">
                            Linkedin &#8599;
                        </Link>
                        <Link href="https://github.com/AnneSun1" className="hover:underline hover:underline-offset-4">
                            Github &#8599;
                        </Link>
                        <Link href="mailto:anne12080901@gmail.com" className="hover:underline hover:underline-offset-4">anne12080901@gmail.com &#8599;</Link>
                        
                    </div>
                    <div className="nav-links flex content-end flex-col text-right mx-10 text-6xl font-bold">
                    <div className="hover:scale-110"><Link href="/" onClick={toggleMenu}>HOME</Link></div>
                        <div className="hover:scale-110"><Link href="/about" onClick={toggleMenu}>ABOUT</Link></div>
                        <div className="hover:scale-110"><Link href="/projects" onClick={toggleMenu}>PROJECTS</Link></div>
                    </div>
                </div>
        </div>
    )
}
