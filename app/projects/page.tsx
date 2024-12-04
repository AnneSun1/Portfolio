import { EstiaDemo } from "./estiaDemo"
import Image from "next/image"

export default function Projects() {
    return (
        <div className="content-center text-white m-10 p-10">
            <div className='text-white flex justify-self-center self-center text-7xl pt-40 pb-24 px-24'>Welcome</div>
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
    )
}