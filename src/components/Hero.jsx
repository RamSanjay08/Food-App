import React from 'react'

const Hero = () => {
  return (
    <section className='max-w-[1640px] max-auto p-4'>
      <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/30 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-yellow-400'>Best</span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-yellow-400'>Foods</span> Delivered <br /> Here...</h1>
        </div>
          <img className='w-full max-h-[500px] object-cover' src="https://c0.wallpaperflare.com/preview/452/635/696/bread-bun-burger-cheese.jpg" alt="" />
      </div>
    </section>
  )
}

export default Hero