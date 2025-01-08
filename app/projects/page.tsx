"use client"
import { EstiaDemo } from "./estiaDemo"
import Image from "next/image"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import './projects.css'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import Card from "./projectCard";
import { NavBar } from "@/components/navbar";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function Projects() {
    const container = useRef(null);

    const moveTo = (id: string) =>{
        gsap.to(window, {
           duration: 1,
           scrollTo: `#${id}`,
           ease: "power2"
        });
    }

    return (
        <div className="text-black h-screen w-screen">
            <NavBar/>
            <div className="h-screen w-screen bg-[#FDCDB7] flex flex-col justify-center items-center" ref={container}>
            <div className='text-black flex justify-self-center self-center text-6xl mb-5'>Projects</div>
                <div className="number-container">
                    <div className="number-icon" onClick={() => moveTo("project1")}><LooksOneIcon fontSize="large"/></div>
                    <div className="number-icon" onClick={() => moveTo("project2")}><LooksTwoIcon fontSize="large"/></div>
                    <div className="number-icon" onClick={() => moveTo("project3")}><Looks3Icon fontSize="large"/></div>
                    <div className="number-icon" onClick={() => moveTo("project4")}><Looks4Icon fontSize="large"/></div>
                    <div className="number-icon" onClick={() => moveTo("project5")}><Looks5Icon fontSize="large"/></div>
                </div>
            </div>

            <div id="project1" className="h-screen w-screen bg-white flex flex-col justify-center items-center">
               <Card 
                title="Wastely"
                summary="Find how to categorize your waste:"
                description=""
                link="https://github.com/AnneSun1/wastely"
                image="images/wastely.png"/>
            </div>

            <div id="project2" className="h-screen w-screen bg-[#D5DDE8] flex flex-col justify-center items-center">
                <Card 
                    title="Estia"
                    summary="Find how to categorize your waste:"
                    description=""
                    link="https://github.com/estiaofficial/estia"
                    image="images/wastely.png"/>
            </div>

            <div id="project3" className="h-screen w-screen bg-[#FDCDB7] flex flex-col justify-center items-center">
                <Card 
                    title="Take Me Out!"
                    summary="Find how to categorize your waste:"
                    description=""
                    link="https://github.com/AnneSun1/Take-Me-Out-Game"
                    image="images/wastely.png"/>
            </div>
            <div id="project4" className="h-screen w-screen bg-white flex flex-col justify-center items-center">
                <Card 
                    title="Yelp Camp"
                    summary="Find how to categorize your waste:"
                    description=""
                    link="https://github.com/AnneSun1/YelpCamp-MERN"
                    image="images/wastely.png"/>
            </div>
            <div id="project5" className="h-screen w-screen bg-[#D5DDE8] flex flex-col justify-center items-center">
                <Card 
                    title="Fina"
                    summary="Find how to categorize your waste:"
                    description=""
                    link="https://github.com/AnneSun1/Fina"
                    image="images/wastely.png"/>
            </div>
            
        </div>
    )
}