import React from 'react'
import { Link } from 'react-router-dom'

import bg from '../assets/bg_image.jpg';

function Homepage() {
  return (
    <main className='w-full h-screen bg-transparent flex flex-col relative text-white'>
      <span 
        className=" w-full h-full absolute -z-10 bg-cover bg-bottom"
        style={{backgroundImage: `url(${bg})`}}
        ></span>
        <section className='flex-auto flex flex-col justify-center items-center gap-5 px-2 '>
            <h1 className='nabla-bannerFont text-6xl sm:text-9xl font-extrabold text-center '>Kanemo</h1>
            <p className='text-2xl text-center'>All of your files at a centralized location</p>
            <p className='text-2xl text-center'>Click to explore <Link className='font-extrabold text-lapisLazuli hover:text-special hover:underline' to='/collections'>Collections</Link></p>
        </section>
    </main>
  )
}

export default Homepage

// Photo by Rostislav Uzunov: https://www.pexels.com/photo/purple-and-pink-diamond-on-blue-background-5011647/






