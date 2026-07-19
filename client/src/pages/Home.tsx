import React from 'react'
import headshot from '../assets/headshot.jpg'
import Reveal from '../components/Reveal'


function Home() {
  return (
    <>
      <main className='flex flex-col justify-center gap-y-16 items-center h-screen px-8'>
        {/* <Reveal> */}
          <div className='flex flex-col items-center gap-y-4'>
            <Reveal><img src={headshot} alt="Profile picture" className='h-25 w-37 object-cover rounded-full' /></Reveal>
            <Reveal delay={0.2}><p className='text-primary uppercase font-jetbrains text-sm'>Information Technology Specialist</p></Reveal>
            <Reveal delay={0.3}><h1 className='text-5xl font-bold text-foreground'><span className='text-gradient'>Abran</span> Lezma</h1></Reveal>
            <Reveal delay={0.4}><p className='text-muted-foreground text-center leading-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos magnam modi totam necessitatibus magni! Nobis consequatur provident sunt quos!</p></Reveal>
          </div>
        {/* </Reveal> */}
        <Reveal delay={0.5}>
          <div className=''>
            <div className='flex flex-col items-center gap-1'>
              <p className='text-muted-foreground font-jetbrains uppercase text-[12px] font-extralight'>Scroll</p>
              <div className='w-px h-8 bg-linear-to-b from-muted-foreground/50 to-transparent'></div>
            </div>
          </div>
        </Reveal>
      </main>
      <section className='px-8 mb-32'>
        <Reveal>
          <p className='text-primary py-2 uppercase'>Now</p>
          <h1 className='text-3xl text-foreground font-bold pb-6'>What I'm <span className='text-gradient'>building</span></h1>
        </Reveal>
        <Reveal>
          <div>
            <p className='bg-card text-muted-foreground leading-7 p-8 rounded-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quasi similique modi provident. Dolore pariatur deleniti amet quos aut consequatur porro fuga eaque repudiandae. Voluptates?</p>
          </div>
        </Reveal>
      </section>
      <section className='px-8 mb-32'>
        <Reveal>
          <p className='text-primary py-2 uppercase'>Work</p>
          <h1 className='text-3xl text-foreground font-bold pb-6'>Featured <span className='text-gradient'>projects</span></h1>
        </Reveal>
        <Reveal>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3 bg-card p-8 rounded-3xl'>
              <h3 className='text-foreground font-bold text-[1.125rem]'>Networking Lab</h3>
              <p className='text-muted-foreground leading-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, aut!</p>
              <div className='flex gap-3'>
                <span className='text-primary primary-bg py-1 px-2 rounded-full text-xs'>Networking</span>
                <span className='text-primary primary-bg py-1 px-2 rounded-full text-xs'>Cisco</span>
              </div>
            </div>
            <div className='flex flex-col gap-3 bg-card p-8 rounded-3xl'>
              <h3 className='text-foreground font-bold text-[1.125rem]'>Tech Blog</h3>
              <p className='text-muted-foreground leading-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, aut!</p>
              <div className='flex gap-3'>
                <span className='text-primary primary-bg py-1 px-2 rounded-full text-xs'>React JS</span>
                <span className='text-primary primary-bg py-1 px-2 rounded-full text-xs'>HTML</span>
                <span className='text-primary primary-bg py-1 px-2 rounded-full text-xs'>CSS</span>
              </div>
            </div>
            <div className='flex flex-col gap-3 bg-card p-8 rounded-3xl'>
              <h3 className='text-foreground font-bold text-[1.125rem]'>Networking Lab</h3>
              <p className='text-muted-foreground leading-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, aut!</p>
              <div className='flex gap-3'>
                <span className='text-primary primary-bg py-1 px-2 rounded-full text-xs'>Networking</span>
                <span className='text-primary primary-bg py-1 px-2 rounded-full text-xs'>Cisco</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

export default Home