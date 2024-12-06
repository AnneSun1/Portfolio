import Head from 'next/head';
import "./background.css";
import { Loader } from '@/components/landing-page/loader';

export default function Home() {
  return (
    <div className='h-screen w-screen flex items-center text-center justify-center bg'>
      <Head><title>Welcome to Anne Sun's Porfolio</title></Head>
     <div className='text-white flex justify-self-center self-center text-7xl pt-40 pb-24 px-24'>Welcome</div>
    </div>
  );
}
