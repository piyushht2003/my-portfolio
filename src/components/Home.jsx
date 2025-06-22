import React from 'react'
const Home = () => {

  gsap.registerPlugin();
  
  
  
  return (
    <div >
        <div id='home' className='bg-zinc-950 px-10 py-10'>
                  <section className='w-full flex  justify-center relative items-center'>
                    <div className='w-full'>
                      <div id='home-top' className='flex flex-col text-white gap-4 p-28 justify-center items-start'>
                        <h1 className='text-9xl mb-3'>Hi, I'm Piyush</h1>
                        <p className='text-lg'>Full-Stack Developer</p>
                        <h3 className='text-4xl flex gap-5 font-bold'><span className='text-green-500'>M</span><span className='text-gray-500'>E</span><span className='text-blue-600'>R</span><span className='text-emerald-800'>N</span> Stack Developer</h3>
                        
                      </div>
                    </div>
                    <div className='w-full h-screen flex justify-center items-center'>
                      
                      <div className='border rounded-4xl px-16 py-20 border-none bg-zinc-900 text-sky-400 shadow-9xl flex flex-col gap-4 justify-center items-start'>
                        <h1 className='text-6xl text-yellow-400'><i class="ri-edit-circle-fill"></i>developer</h1>
                        <span className='text-9xl'>Portfolio</span>
                        
                      </div>
                    </div>
                  </section>
                </div>
    </div>
  )
}

export default Home