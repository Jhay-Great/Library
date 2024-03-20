import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <main className='w-full h-screen bg-green-400 flex flex-col'>
        <section className='flex-auto flex flex-col justify-center items-center gap-5 px-2'>
            <h1 className='text-2xl sm:text-4xl font-extrabold text-center'>Programming Library</h1>
            <p>Click to explore <Link className='font-bold' to='/collections'>Collections</Link></p>
        </section>
    </main>
  )
}

export default Homepage