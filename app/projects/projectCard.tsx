import './projects.css';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
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
gsap.registerPlugin(ScrollTrigger);
const projectCard = ({number, title, summary, description, link, image} : ProjectCardParams) => {
    
    useEffect(() => {
        const tl = gsap.timeline({repeat: 0, paused: true});
        description.forEach((line, index) => (
            tl.add(gsap.timeline({repeat: 0}).to(`#${number}-line-${index}`, {duration: 1, text: line}))
        ))

        gsap.timeline({
            scrollTrigger: ({
            trigger: `#project-${number}`,
            // markers: true,
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () => {
                tl.play();
            },
          })
        })

        return () => {
            tl.kill(); 
          };
    }, [])
    
    return (
        <div className="project-card" id={`project-${number}`}>
            <h1 className="mb-2">{title}</h1>
            <h2 className="mb-5">{summary}</h2>
            <div className='flex flex-column justify-center flex-wrap'>
               <div className="project-container">
                    <img src={image}></img>
                    <a href={link} target="_blank"><div id="circle">♥</div></a>
                </div>
                <div className='flex flex-col justify-left'>
                    {description.map((_, index) => (
                            <p id={`${number}-line-${index}`} key={index}></p> 
                        ))}
                </div>
            </div>
        
    </div>
    )
}

export default projectCard;