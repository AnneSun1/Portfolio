"use client"
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useEffect, useRef } from "react";
import { NavBar } from "@/components/navbar/navbar";
import "./about.css"


gsap.registerPlugin(TextPlugin);

export default function About() {
    useEffect(() => {
        const tl = gsap.timeline({repeat: 0})
        tl.add(gsap.timeline({repeat: 0}).to('#name', {duration: 1, text: "♥ Name: Anne Sun"}))
        tl.add(gsap.timeline({repeat: 0}).to('#education', {duration: 1, text: "♥ Education: Term 2B Computer Science student at the University of Waterloo!"}))
        tl.add(gsap.timeline({repeat: 0}).to('#expertise', {duration: 1, text: "♥ Expertise: Full-stack development, game development, ML/DL"}))
        tl.add(gsap.timeline({repeat: 0}).to('#loves', {duration: 1, text: "♥ What I Love:  yoga, my 5 year old cat, digital art, swimming"}))
        return () => {
            tl.kill(); // This will stop all animations and cleanup resources
          };
    })

    return (
        <div className="flex flex-row justify-evenly align-items flex-wrap-reverse">
            <NavBar/>
            
                <div className="portrait-container">
                    {/* <p>♥</p> */}
                    <img className="me" src='./images/portfolio-img.jpeg'></img>
                </div>  
                
                {/* <img className="cat" src="./images/cat-portfolio-img.jpg"></img> */}
            <div className="about-me-container">
                <h1 className="text-3xl">About Me</h1>
                <div className="description-container">
                    <p id="name"></p>
                    <p id="education"></p>
                    <p id="expertise"></p>
                    <p id="loves"></p>
                </div>
                
                <div className="icon-container">
                    <div className="icon"><a href="https://github.com/AnneSun1" target="_blank"><img src="/icons/github.svg"/></a></div>
                    <div className="icon"><a href="https://www.linkedin.com/in/sunanne/" target="_blank"><img src="/icons/linkedin.svg"/></a></div>
                    <button>Resume</button>
                </div>

            </div>
        </div>
    )
}