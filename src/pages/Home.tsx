import React from 'react'
import headshot from '../assets/headshot.jpg'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className=''>
        <div className='max-w-6xl mx-auto px-6'>
            <section className='min-h-screen flex flex-col items-center justify-center gap-6'>
                <img src={headshot} alt='Abran Lezama' className='w-25 h-25 object-cover inline-block rounded-full' />
                <p className='uppercase text-sm text-primary font-jetbrains'>Information Technology Specialist</p>
                <h1 className='text-foreground text-5xl font-bold'><span className='text-gradient'>Abran</span> Lezama</h1>
                <p className='text-center text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto illum cupiditate laboriosam iure natus aliquid in nesciunt ab tenetur.</p>
                <div>
                    <NavLink to='/contact' className='bg-card glass text-foreground rounded-lg py-3 px-6 font-semibold text-md inline-block transition-all transition-transform duration-300 hover:scale-105 hover:bg-white/10'>Get in Touch</NavLink>
                </div>
                <div className='flex flex-col items-center gap-2 text-muted-foreground/50'>
                    <p className='uppercase font-jetbrains text-xs'>scroll</p>
                    <div className='h-8 w-px bg-linear-to-b from-muted-foreground/50 to-transparent'></div>
                </div>
            </section>
            <section>
                <div className='mb-6'>
                    <p className='text-primary font-jetbrains text-sm uppercase mb-1.5'>About</p>
                    <h1 className='text-foreground text-4xl font-bold'>From <span className='text-gradient'>curiosity</span> to code</h1>
                </div>
                <div className='flex flex-col md:flex-row gap-8'>
                    <p className='bg-card glass p-8 rounded-2xl leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo animi impedit maiores odit culpa rem, perspiciatis officia laborum illo voluptatem, voluptas repellat non exercitationem aut dolor perferendis magnam quo veritatis.</p>
                    <p className='bg-card glass p-8 rounded-2xl leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, placeat non rerum, earum, culpa ipsa ex obcaecati nemo cumque nobis optio perspiciatis praesentium labore velit dolores voluptatibus facilis odit modi!</p>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Home