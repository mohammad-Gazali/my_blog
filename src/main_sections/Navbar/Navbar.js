import './Navbar.css';

import { ListWithIcon, NavLink } from '../../components';

import {FaBars, FaHome} from 'react-icons/fa';
import {BsQuestionCircleFill} from 'react-icons/bs';
import {MdOutlineArticle} from 'react-icons/md';


function Navbar(props){


    function navToggle(e) {
        let colNavList = document.getElementById('collapse-list-nav');
        colNavList.classList.toggle('active-nav-list')
    }


    const ICONSTYLENAVLIST = {display: 'inline-block', fontSize: 25};

    return (
        <>
            <nav className='w-screen px-10 py-5 bg-mydark text-white flex flex-row items-center justify-between'>
                <div className='font-bold text-2xl tracking-wide'><a href="/#">Elgazali</a></div>
                <div className='h-8 w-8 flex justify-center items-center relative'>
                    <div className='md:hidden w-full cursor-pointer h-full absolute' onClick={navToggle} />
                    <div className='md:hidden'>
                        <FaBars style={{fontSize: 30}}/>
                    </div>
                </div>
                <ul className='hidden md:flex flex-row items-center justify-center gap-5 text-white'>
                    <NavLink name='Home' href='/#' />
                    <NavLink name='About' href='/#' />
                    <NavLink name='Blog' href='/#' />
                </ul>
            </nav> 
            <ul id='collapse-list-nav' className='flex flex-col w-full pl-10 py-5 items-start justify-evenly bg-mydark gap-1 text-white opacity-90 overflow-hidden'>
                <ListWithIcon href='/#' name='Home' icon={<FaHome style={ICONSTYLENAVLIST} />} />
                <ListWithIcon href='/#' name='About' icon={<BsQuestionCircleFill style={ICONSTYLENAVLIST} />} />
                <ListWithIcon href='/#' name='Blog' icon={<MdOutlineArticle style={ICONSTYLENAVLIST} />} />
            </ul>
        </>
    )
}

export default Navbar


