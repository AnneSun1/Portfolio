import Head from 'next/head';
import { NavBar } from '@/components/navbar';

export default function Home() {
  return (
    <div className='h-screen w-screen flex items-center text-center justify-center'>
      <NavBar/>
     <div className='text-black flex flex-col justify-self-center self-center pt-40 pb-24 px-24'>
        
        <div className='text-7xl'>I'm Anne!</div>
        <div className='text-4xl'>
          Welcome to my webpage ♡
        </div>
     </div>
     <div><img src='/images/panda.png' style={{ height: '300px', width: '300px'}}></img></div>
    </div>
  );
}
