import Head from 'next/head';
import { NavBar } from '../components/navbar';
import { Border } from '../components/border';

export default function Home() {
  return (
    <div className='flex items-center text-center justify-center m-10'>
      <Head><title>Welcome to Anne Sun's Porfolio</title></Head>
      {/* <Border/> */}
      <div className='text-white flex justify-self-center self-center text-7xl pt-40 pb-24 px-24'>Welcome</div>
    </div>
  );
}
