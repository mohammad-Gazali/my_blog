import React from 'react'
import { GiElectric } from "react-icons/gi";
import { AiFillSetting, AiFillHome } from "react-icons/ai";
import { BsBellFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const NavDashBoard = () => {
  return (
    <nav className='w-full px-4 py-5 flex justify-between items-center'>
        <div className='text-[20px] font-bold flex justify-center items-center text-primary'>
            <GiElectric className='text-[30px] text-myyellow' /> Dashboard
        </div>
        <div className='flex justify-center items-center gap-4 text-primary font-bold text-[20px]'>
            <Link to="/" className='w-9 h-9 bg-primary rounded-full hover:scale-125 hover:bg-mylight hover:text-primary transition-all flex justify-center items-center text-mylight'>
                <AiFillHome className='text-[25px]' />
            </Link>
            <div className='w-9 h-9 bg-primary rounded-full hover:rotate-180 hover:bg-mylight hover:text-primary transition-all flex justify-center items-center text-mylight'>
                <AiFillSetting className='text-[25px]' /> 
            </div>
            <div className='w-9 h-9 relative bg-primary rounded-full hover:bg-mylight text-white my__shake transition-colors flex justify-center items-center group'>
                <BsBellFill className='text-[25px] group-hover:text-primary transition-all' /> 
                <span className='text-[10px] top-0 right-[-8px] flex justify-center items-center w-4 h-4 rounded-full absolute bg-myred'>
                    10
                </span>
            </div>
        </div>
    </nav>
  )
}

export default NavDashBoard