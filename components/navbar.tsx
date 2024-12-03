"use client";
import { useState } from 'react';
import Link from 'next/link';

export function NavBar() {
    const [focus, setFocus] = useState();
    
    return (
        <div className="sticky top-0 flex flex-row justify-end bg-black border-white border text-white rounded-full px-5 mt-10 ml-10 mr-10">
            <div className="m-4"><Link href="/about">About Me</Link></div>
            <div className="m-4"><Link href="/projects">Projects</Link></div>
            <div className="m-4"><Link href="/">Home</Link></div>
        </div>
    )
}