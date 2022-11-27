import React from 'react'

const MyContainer = ({children}) => {
  return (
    <div className='sm:px-10 px-4'>
        {children}
    </div>
  )
}

export default MyContainer