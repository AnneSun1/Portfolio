"use client"
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { NavBar } from "@/components/navbar";
import "./about.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const container = useRef(null);
    // const tl = useRef<any| null>(null);
    

    // useGSAP(() => {
    //     ScrollTrigger.create({
    //         trigger: ".page-1",
    //         snap: {
    //           snapTo: 1, // Snap to the closest half page
    //           duration: 0.75, // Animation duration for the snap
    //           ease: "power4.in", // Easing for the snap
    //         },
    //         scrub: true
    //       });
    // }, {scope: container})

    return (
        <div className="flex flex-row justify-evenly align-items">
            <NavBar/>
            
                <div className="portrait-container">
                    {/* <p>♥</p> */}
                    <img className="me" src='./images/portfolio-img.jpeg'></img>
                </div>  
                
                {/* <img className="cat" src="./images/cat-portfolio-img.jpg"></img> */}
            <div className="about-me-container">
                <h1 className="text-3xl">About Me</h1>
                <div className="description-container">
                    <p>♥ Name: Anne Sun </p>
                    <p>♥ Education: Second year Computer Science student at the University of Waterloo!</p>
                    <p>♥ Expertise: Full-stack development, game development and machine learning/deep learning</p>
                    <p>♥ Values: I'm passionate about empowering women and underrepresented genders in STEM 
                        through education and providing equitable oppurtunities in my role as a WiCS executive.</p>
                    <p>♥ What I Love:  yoga, my 5 year old cat, digital art, swimming</p>
                </div>
                
                <div className="icon-container">
                    <div className="icon"><GitHubIcon fontSize="large"/></div>
                    <div className="icon"><LinkedInIcon fontSize="large"/></div>
                    <button>Resume</button>
                </div>

            </div>
        </div>
    )
}