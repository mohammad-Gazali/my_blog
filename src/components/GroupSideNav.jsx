import React from 'react'

const GroupSideNav = ({header, children, divider}) => {
  return (
    <div>
        <h3 className='text-[18px] font-semibold border-primary text-primary my-3'>{header}</h3>
        <ul className='flex flex-col'>
            {children}
        </ul>
        { divider === "no" ? "" : <hr className={`bg-mylightblue/10 my-4`} /> }
    </div>
  )
}

export default GroupSideNav