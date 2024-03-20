import React, { useState } from 'react'
import Headings from '../components/Headings';
import MainContainer from '../components/MainContainer';

function About() {
    const [input, setInput] = useState({email: '', message: ''});

    const handleChange = function(e) {
        return setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }
    
  return (
    <MainContainer>
        <section>
            <Headings children='About Programming Library' additionalStyles='mb-5' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione quae quia, sint ipsam accusantium? Ducimus officiis et fugit obcaecati? Accusamus itaque nemo veniam obcaecati blanditiis non est laborum vel, sunt aperiam repudiandae. Iste, natus tempora culpa libero dignissimos quas praesentium laboriosam, enim quos necessitatibus, vitae dolore laudantium molestiae nulla?</p>

        </section>
        
        {/* FORM SECTION */}
        <Headings children='Contact us' />
        <form action="" className='flex justify-center '>
            <div className='w-1/2 my-4 flex flex-col gap-3 items-center *:w-full'>
                {/* name */}
                <input onChange={handleChange} type="email" value={input.email} name='email' placeholder='Email address' className='p-3 placeholder:text-sm' autoFocus />

                <textarea onChange={handleChange} name="message" value={input.message} id="" cols="30" rows="10" className='p-3 placeholder:text-sm' ></textarea>

                <button type='submit' className='bg-gray-500 p-3'>Send</button>
            </div>
        </form>
        
    </MainContainer>
  )
}

export default About