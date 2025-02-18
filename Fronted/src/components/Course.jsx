import React from 'react'
import  list  from '../../public/list.json'
import Card from './Card'
import {Link} from 'react-router-dom'
const Course = () => {
  
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1>We're delighted to have you {""} 
          <span className='text-pink-500'>Here! :)</span></h1>
          <p className='mt-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis asperiores sapiente porro quasi facilis nihil similique, amet enim repellendus alias repellat voluptas saepe eveniet numquam atque nulla, odit reiciendis minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloremque expedita, labore quisquam odio rerum ipsum tenetur cupiditate omnis officiis blanditiis quidem explicabo vero, quia sint necessitatibus commodi provident ratione.</p>
          <Link to="/">
          <button className='mt-6 !bg-pink-500 text-white px-4 py-2 rounded-md hover:!bg-pink-700 duration-300'>Back</button>
          </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
      {
        list.map((item) => (
          <Card key={item.id} item={item}/>
        )) 
        }

      </div>
    </div>
    </>
  )
}

export default Course
