"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export function Loader() {
    useEffect(() => {
        let currentValue = 0;
        function updateCounter() {
            let counterElement = document.querySelector(".counter");

            if (!counterElement) {
                console.error("No counter elements found.")
                return;
            }

            if (currentValue === 100) {
                return;
            }
            currentValue += Math.floor(Math.random() * 10) + 1;
            if (currentValue > 100) currentValue = 100;
            counterElement.textContent = currentValue.toString() + "%";
            console.log(counterElement.textContent)
            let delay = Math.floor(Math.random() * 200) * 2;

            setTimeout(updateCounter, delay);
        }
        updateCounter();
    }, [])
    
    useGSAP(() => {
        // gsap.to("loader", {
            
        // })

        // gsap.to(".bar", {
        //     delay: 3.5,
        //     height: 0,
        //     stagger: {
        //         amount: 0.5
        //     },
        //     ease: "power4.inOut"
        // })

        gsap.to(".progress-bar", {
            width: "30%",
            duration: 3,
            ease: "power4.inOut",
            delay: 4,
        })

        gsap.to(".progress-bar", {
            width: "100%",
            duration: 3,
            opacity: 0,
            ease: "power3.out",
            delay: 6,
            onComplete: () => {
                gsap.set(".loader", {
                    display: "none",
                    opacity: 0,
                    ease: "power3.out",
                })
            }
        })

        gsap.to(".counter", {
            duration: 1.5,
            opacity: 0,
            ease: "power3.out",
            delay: 6.5
        })
    })

    return (

        <div className="loader z-[5] bg-yellow text-black absolute h-full w-full text-right flex border justify-end">
            

            <div className="overlay">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* <div className="header flex-1">
                <div className="h1">W</div>
                <div className="h1">e</div>
                <div className="h1">l</div>
                <div className="h1">c</div>
                <div className="h1">o</div>
                <div className="h1">m</div>
                <div className="h1">e</div>
            </div> */}
            
            <div className="counter flex-1 self-end m-10 text-8xl">0%</div>

            <div className="progress-bar border-x-0 border-t-0 border-b-4 border-black relative bottom-[55px] "></div>
        </div>
    )
}