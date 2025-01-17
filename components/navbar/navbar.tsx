"use client";
import { useState } from 'react';
import Link from 'next/link';
import './navbar.css';

export function NavBar() {
    return (
        <div className="navbar">
            <div className="m-4"><Link href="/">Home</Link></div>
            <div className="m-4"><Link href="/about">About Me</Link></div>
            <div className="m-4"><Link href="/projects">Projects</Link></div>
            <div className="m-4"><Link href="/experience">Experience</Link></div>
        </div>
    )
}