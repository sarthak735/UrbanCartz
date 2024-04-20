import React from 'react'

const Item = (props) => {
  return (
    <div className=' w-80 hover:border hover:transform hover:scale-105 hover:transition'>
      <img src={props.image} alt=''/>
      <p className=' mt-2 mr-0'>{props.name}</p>
      <div className=' flex gap-5'>
        <div className=' text-gray-600 text-lg font-semibold'>
            ${props.new_price}
        </div>
        <div className=' text-gray-400 text-lg font-medium line-through'>
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
