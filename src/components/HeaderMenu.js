import React from 'react'

const HeaderMenu = ( { title } ) => {
  return (
    <div className='pb-6'>
      <h3 className='text-white sm:text-center md:text-left text-2xl font-bold'>{title}</h3>
    </div>
  )
}

export default HeaderMenu