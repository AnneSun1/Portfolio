import { EstiaDemo } from "./estiaDemo"
import Image from "next/image"

export default function Projects() {
    return (
        <>
        <div className="content-center text-white font-ubuntu m-10 p-10">
            <h1 className="text-center text-xl">Projects</h1>
            <ul>
                <li className="flex-1 flex-vertical">
                    Estia: <EstiaDemo/>
                    
                </li>
                <li className="flex-1 flex-vertical">
                    Take Me Out!:
                    <Image src="/images/take-me-out.png" width={500} height={500} alt="Take me out"/>
                </li>
            </ul>

        </div>
        </>
    )
}