"use client"
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import './projects.css'
import Card from "./projectCard";
import { NavBar } from "@/components/navbar/navbar";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function Projects() {
    const container = useRef(null);

    const wastelyDescription = ["♥ Tech Stack: Tensorflow, Python, React, Express, HTML, CSS, Javascript, Docker, AWS", 
        "♥ Catgeorize your waste into Organics vs Recycables using a deep learning model", 
        "♥ Use an interactive Mapbox-GL map to find the nearest trashcan to you!"]
    const estiaDescription = ["♥ Tech Stack: React, TypeScript, CSS, HTML, Redux, Supabase", 
        "♥ Save, post and like side project ideas with videos and github repos provided", 
        "♥ Like, comment and upvote projects that you think are helpful and creative for learning"]
    const takeMeOutDescription = ["♥ Tech Stack: Python, Ren'py", 
        "♥ A fully written visual novel game with sound effects, music and PLOTTWISTS!",
        "♥ Interact with characters and see how your story ends"]
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
        <div className="">
            <NavBar/>
            <div className="h-screen w-screen bg-[#FDCDB7] flex flex-col justify-center items-center" ref={container}>
            <div className='text-black flex justify-self-center self-center text-6xl mb-10'>Projects</div>
            
                <div className="number-container">
                    <p>♥ Click below to jump to a project ♥</p>
                    <div className="flex flex-row justify-center">
                        <div className="number-icon" onClick={() => moveTo("project1")}><img src="/icons/one_32.svg"/></div>
                        <div className="number-icon" onClick={() => moveTo("project2")}><img src="/icons/two_32.svg"/></div>
                        <div className="number-icon" onClick={() => moveTo("project3")}><img src="/icons/three_32.svg"/></div>
                        <div className="number-icon" onClick={() => moveTo("project4")}><img src="/icons/four_32.svg"/></div>
                        <div className="number-icon" onClick={() => moveTo("project5")}><img src="/icons/five_32.svg"/></div>
                    </div>
                </div>
            </div>

            <div id="project1" className="bg-white flex flex-col justify-center items-center">
               <Card 
                number="one"
                title="Wastely"
                summary="Find how to categorize your waste:"
                description={wastelyDescription}
                link="https://github.com/AnneSun1/wastely"
                image="images/wastely.png"/>
            </div>

            <div id="project2" className="bg-[#D5DDE8] flex flex-col justify-center items-center">
                <Card 
                    number="two"
                    title="Estia"
                    summary="Find your next side project:"
                    description={estiaDescription}
                    link="https://github.com/estiaofficial/estia"
                    image="images/estia.png"/>
            </div>

            <div id="project3" className="bg-[#FDCDB7] flex flex-col justify-center items-center">
                <Card 
                    number="three"
                    title="Take Me Out!"
                    summary="Date the 2D man of your dreams!:"
                    description={takeMeOutDescription}
                    link="https://github.com/AnneSun1/Take-Me-Out-Game"
                    image="images/take-me-out.png"/>
            </div>
            <div id="project4" className="bg-white flex flex-col justify-center items-center">
                <Card 
                    number="four"
                    title="Yelp Camp"
                    summary="Find the next hot campsite:"
                    description={yelpCampDescription}
                    link="https://github.com/AnneSun1/YelpCamp-MERN"
                    image="images/coming-soon.png"/>
            </div>
            <div id="project5" className="bg-[#D5DDE8] flex flex-col justify-center items-center">
                <Card 
                    number="five"
                    title="Fina"
                    summary="A financial tracker...:"
                    description={finaDescription}
                    link="https://github.com/AnneSun1/Fina"
                    image="images/coming-soon.png"/>
            </div>
            
        </div>
    )
}