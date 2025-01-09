import './projects.css';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { useEffect, useRef, useState } from 'react';

interface ProjectCardParams {
    number: string;
    title: string;
    summary: string;
    description: string[];
    link: string;
    image: string;
}

gsap.registerPlugin(TextPlugin);

const projectCard = ({number, title, summary, description, link, image} : ProjectCardParams) => {
    
    useEffect(() => {
        const tl = gsap.timeline({repeat: 0});
        description.forEach((line, index) => (
            tl.add(gsap.timeline({repeat: 0}).to(`#${number}-line-${index}`, {duration: 1, text: line}))
        ))

        return () => {
            tl.kill(); 
          };
    }, [])
    
    return (
        <div className="project-card">
            <h1 className="mb-2">{title}</h1>
            <h2 className="mb-5">{summary}</h2>
            <div className='flex flex-row justify-center '>
               <div className="project-container">
                    <img src={image}></img>
                    <a href={link} target="_blank"><div id="circle">♥</div></a>
                </div>
                {description.map((_, index) => (
                        <p id={`${number}-line-${index}`} key={index}></p> 
                    ))}
            </div>
        
    </div>
    )
}

export default projectCard;