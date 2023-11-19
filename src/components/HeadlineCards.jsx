import React from 'react'

const HeadlineCards = () => {

  const Hcards = [
    {
      id:1,
      title: 'New Restaruant',
      desc: 'Daily Devlivery',
      image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id:1,
      title: 'New Restaruant',
      desc: 'Daily Devlivery',
      image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id:1,
      title: 'New Restaruant',
      desc: 'Daily Devlivery',
      image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ]

  return (
    <>
     <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6' >
     {Hcards.map(({id,title,desc,image}) => {
      return <div className='relative rounded-xl' key={id}>
        <div className='absolute bg-black/50 w-full h-full rounded-xl text-white'>
          <p className='font-bold px-2 pt-4 text-2xl'>{title}</p>
          <p className='px-2'>{desc}</p>
          <button className='border-white absolute bg-white text-black mx-2 bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={image} alt="" />
      </div>
    })}
    </div>
    </>
  )
}

export default HeadlineCards