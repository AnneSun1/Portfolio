"use client"
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import './projects.css'
import Card from "./projectCard";
import { NavBar } from "@/components/navbar/navbar";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function Projects() {
    const container = useRef(null);
    const project1 = useRef(null);
    const project2 = useRef(null);
    const project3 = useRef(null);
    const project4 = useRef(null);
    const project5 = useRef(null);

    const wastelyDescription = ["♥ Tech Stack: Tensorflow, Python, React, Express, HTML, CSS, Javascript, Docker, AWS", 
        "♥ Catgeorize your waste into Organics vs Recycables using a deep learning model", 
        "♥ Use an interactive Mapbox-GL map to find the nearest trashcan to you!"]
    const estiaDescription = ["♥ Tech Stack: React, TypeScript, CSS, HTML, Redux, Supabase", 
        "♥ Save, post and like side project ideas with videos and github repos provided", 
        "♥ Like, comment and upvote projects that you think are helpful and creative for learning"]
    const takeMeOutDescription = ["♥ Tech Stack: Python, Ren'py", 
        "♥ A fully written visual novel game with sound effects, music and PLOT TWISTS!",
        "♥ Interact with characters and see how your story ends"]
    const SqwitsGameDescription = ["♥ Tech Stack: React, Flask, OpenCV, Framer Motion, YOLOv5, Databricks", 
        "♥ Coming Soon..."]
    const yelpCampDescription = ["♥ Tech Stack: React, Express, MongoDB, Redux, HTML, CSS, GSAP", 
        "♥ Coming Soon..."]
    const finaDescription = ["♥ Tech Stack: React, Javascript, React Native", 
        "♥ Coming Soon..."]

    const moveTo = (id: string) =>{
        gsap.to(window, {
           duration: 1,
           scrollTo: `#${id}`,
           ease: "power2"
        });
    }

    return (
        <div className="flex flex-col">
            <NavBar/>
            <div className="h-screen bg-[#FDCDB7] flex flex-col justify-center items-center pb-10 pt-30" ref={container}>
                <div className='text-black flex justify-self-center self-center lg:text-6xl text-4xl pb-10 pt-10'>Projects</div>
                
                <div className="number-container">
                    {/* <p className="md:text-lg text-xs"></p> */}
                    <div className="flex flex-row sm:flex-row items-center justify-center flex-wrap">
                        <div className="number-icon" onClick={() => moveTo("project1")}>1</div>
                        <div className="number-icon" onClick={() => moveTo("project2")}>2</div>
                        <div className="number-icon" onClick={() => moveTo("project3")}>3</div>
                        <div className="number-icon" onClick={() => moveTo("project4")}>4</div>
                        <div className="number-icon" onClick={() => moveTo("project5")}>5</div>
                    </div>
                </div>
            </div>

            <div id="project1" className="bg-white flex flex-col justify-center items-center">
               <Card 
                number="one"
                title="SqWiTs Game"
                summary="SheHacks 9: 3rd Place Overall, SheHacks 9: Best Use of Databricks Award"
                description={SqwitsGameDescription}
                link="https://github.com/AnneSun1/SqWiTs-game"
                image="images/sqwits-game.png"/>
            </div>

            <div id="project2" className="bg-[#D5DDE8] flex flex-col justify-center items-center">
                <Card 
                    number="two"
                    title="Wastely"
                    summary="Find how to categorize your waste:"
                    description={wastelyDescription}
                    link="https://github.com/AnneSun1/wastely"
                    image="images/wastely.png"/>
            </div>

            <div id="project3" className="bg-[#FDCDB7] flex flex-col justify-center items-center">
            <Card 
                    number="three"
                    title="Estia"
                    summary="Find your next side project:"
                    description={estiaDescription}
                    link="https://github.com/estiaofficial/estia"
                    image="images/estia.png"/>
            </div>
            <div id="project4" className="bg-white flex flex-col justify-center items-center">
                <Card 
                    number="four"
                    title="Take Me Out!"
                    summary="Date the 2D man of your dreams!:"
                    description={takeMeOutDescription}
                    link="https://github.com/AnneSun1/Take-Me-Out-Game"
                    image="images/take-me-out.png"/>
            </div>
            <div id="project5" className="bg-[#D5DDE8] flex flex-col justify-center items-center">
                <Card 
                    number="five"
                    title="Fina"
                    summary=""
                    description={finaDescription}
                    link="https://github.com/AnneSun1/Fina"
                    image="images/coming-soon.png"/>
            </div>
            
        </div>
    )
}