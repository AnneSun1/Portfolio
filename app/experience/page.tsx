"use client"
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";
import { NavBar } from "@/components/navbar/navbar";
import './experience.css'
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
export default function About() {
    
    const container = useRef(null);
    const moveTo = (id: string) =>{
        gsap.to(window, {
           duration: 1,
           scrollTo: `#${id}`,
           ease: "power2"
        });
    }

    return (
        <div className="flex flex-col justify-center align-items flex-wrap-reverse">
            <NavBar/>
            <div className="h-screen bg-[#D5DDE8] flex flex-col justify-center items-center pb-10 pt-30" ref={container}>
            <div className='text-black flex justify-self-center self-center lg:text-6xl text-4xl pb-10 pt-10'>Experience</div>
            <div className="number-container">
                    {/* <p className="md:text-lg text-xs"></p> */}
                    <div className="flex flex-row sm:flex-row items-center justify-center flex-wrap">
                        <div className="number-icon" onClick={() => moveTo("work")}>Work</div>
                        <div className="number-icon" onClick={() => moveTo("volunteer")}>Volunteer</div>
                    </div>
            </div>
            
         </div>

        <div className="space-y-6 mx-5 mt-5 mb-5">
            
            {/* Work Experience */}
            <div id="work" className="rounded-3xl bg-white p-6 shadow-lg">
              <h2 className="pixel-font mb-4 text-2xl">♦ Work Experience</h2>
              <div className="space-y-4">
                <div className="rounded-lg bg-[#f8f9fa] p-4">
                  <h3 className="font-bold">Software Developer Intern</h3>
                  <p className="text-sm text-gray-600">University of Toronto • Sep 2024 - Dec 2024</p>
                  <ul className="mt-2 list-inside list-disc text-sm">
                    <li>Migrated a monolithic Studentrecord API into 5+ Microservices using Typescript and Express.js</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-[#f8f9fa] p-4">
                  <h3 className="font-bold">SPARCs House Parent</h3>
                  <p className="text-sm text-gray-600">CEMC Waterloo • Aug 2023</p>
                  <ul className="mt-2 mb-2 list-inside list-disc text-sm">
                    <li>Supervised a group of 30+ students ensuring a safe and supportive environemt</li>
                  </ul>
                  <Link 
                        href="https://cemc.uwaterloo.ca/workshops/student-workshops/sparcs" 
                        className="rounded-full bg-[#ffd9d9] p-2 text-sm transition-transform hover:scale-110"
                    >
                        Learn More
                    </Link>
                  {/* <div className="relative h-32 w-full">
                    <Image
                      src="/placeholder.svg?height=128&width=400"
                      alt="TechCorp Office"
                      fill
                      className="object-cover"
                    />
                  </div> */}
                </div>
              
                <div className="rounded-lg bg-[#f8f9fa] p-4">
                  <h3 className="font-bold">Swim Instructor</h3>
                  <p className="text-sm text-gray-600">Pedalheads • Mar 2023 - Sep 2023</p>
                  <ul className="mt-2 list-inside list-disc text-sm">
                    <li>Developed weekly lesson plans for 50+ swimmers aging 4-16 years old</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Volunteer Experience */}
            <div id="volunteer" className="rounded-3xl bg-white p-6 shadow-lg">
              <h2 className="pixel-font mb-4 text-2xl">♦ Volunteer Work</h2>
              <div className="space-y-4">
              <div className="rounded-lg bg-[#f8f9fa] p-4">
                  <h3 className="font-bold">Publicity Director</h3>
                  <p className="text-sm text-gray-600">UW WiCS • Jan 2024 - Present</p>
                  <ul className="mt-2 mb-2 list-inside list-disc text-sm">
                    <li>Design, update and coordinate events on @uwaterloowics instagram using Canva</li>
                  </ul>
                  <Link 
                        href="https://wics.uwaterloo.ca/" 
                        className="rounded-full bg-[#ffd9d9] p-2 text-sm transition-transform hover:scale-110"
                    >
                        Learn More
                    </Link>
                </div>
                <div className="rounded-lg bg-[#f8f9fa] p-4">
                  <h3 className="font-bold">Coding Ambassador</h3>
                  <p className="text-sm text-gray-600">Canada Learning Code • Sep 2022 - June 2023</p>
                  <ul className="mt-2 mb-2 list-inside list-disc text-sm">
                    <li>Raised $300+ through fundraisers to fund underrepresented students in taking the Canadian Coding Competition</li>
                  </ul>
                  <Link 
                        href="https://www.canadalearningcode.ca/about-us/" 
                        className="rounded-full bg-[#ffd9d9] p-2 text-sm transition-transform hover:scale-110"
                    >
                        Learn More
                    </Link>
                </div>
                <div className="rounded-lg bg-[#f8f9fa] p-4">
                  <h3 className="font-bold">Kakehashi Project Alumni</h3>
                  <p className="text-sm text-gray-600">Asia Pacific Foundation • Mar 2023</p>
                  <ul className="mt-2 mb-2 list-inside list-disc text-sm">
                    <li>1 of 28 students in British Columbia chosen to participate in a fully funded culture exchange trip to Japan</li>
                  </ul>
                  <Link 
                        href="https://burnabyschools.ca/learning-through-a-japanese-cultural-exchange/" 
                        className="rounded-full bg-[#ffd9d9] p-2 text-sm transition-transform hover:scale-110"
                    >
                        Learn More
                    </Link>
                  {/* <div className="relative px-[50px] h-[300px] w-full">
                    <Image
                      src="/images/kakehashi.png"
                      alt="TechCorp Office"
                      fill
                      className="object-cover"
                    />
                  </div>  */}
                </div>
                <div className="rounded-lg bg-[#f8f9fa] p-4">
                  <h3 className="font-bold">Head Swim Coach</h3>
                  <p className="text-sm text-gray-600">Moscrop Swim Team & Burnaby Central Swim Team • Sep 2022 - Jan 2023</p>
                  <ul className="mt-2 list-inside list-disc text-sm">
                    <li>Coached 20+ provincially qualified swimmers, in which 5 of them placed in top 3</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-4">
          
         
          
        </div>
        </div>
        
    )
}