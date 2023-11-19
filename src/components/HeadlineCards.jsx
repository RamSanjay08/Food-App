import React from 'react'

const HeadlineCards = () => {

  const Hcards = [
    {
      id:1,
      title: `Sun's Out, BOGO's Out`,
      desc: 'Through 8/27',
      image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id:2,
      title: 'New Restaruants',
      desc: 'Added Daily',
      image: 'https://images.pexels.com/photos/8173488/pexels-photo-8173488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id:3,
      title: 'We Deliver Desserts Too',
      desc: 'Tasty Treats',
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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