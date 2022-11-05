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


    window.onscroll = () => {
        if (window.scrollY !== 0) {
            document.querySelector('nav').classList.remove('bg-transparent')
            document.querySelector('nav').classList.add('bg-mydark')
            document.querySelector('#collapse-list-nav').classList.remove('bg-transparent')
            document.querySelector('#collapse-list-nav').classList.add('bg-mydark')
        } else {
            document.querySelector('nav').classList.remove('bg-mydark')
            document.querySelector('nav').classList.add('bg-transparent')
            document.querySelector('#collapse-list-nav').classList.remove('bg-mydark')
            document.querySelector('#collapse-list-nav').classList.add('bg-transparent')
        }
    }


    const ICONSTYLENAVLIST = {display: 'inline-block', fontSize: 25};

    return (
        <div className='sticky top-0 z-50 w-full'>
            <nav className='w-full px-10 py-5 bg-transparent text-white flex flex-row items-center justify-between opacity-95 transition-all duration-200'>
                <div className='font-bold text-2xl tracking-wide'><a href="/#">Elgazali</a></div>
                <div className='h-8 w-8 flex justify-center items-center relative'>
                    <div className='md:hidden w-full cursor-pointer h-full absolute' onClick={navToggle} />
                    <div className='md:hidden'>
                        <FaBars style={{fontSize: 30}}/>
                    </div>
                </div>
                <ul className='hidden md:flex flex-row items-center justify-center gap-6 text-white'>
                    <NavLink name='Home' href='/#' />
                    <NavLink name='About' href='/#' />
                    <NavLink name='Blog' href='/#' />
                </ul>
            </nav> 
            <ul id='collapse-list-nav' className='flex flex-col w-full pl-10 py-5 items-start justify-evenly bg-transparent gap-1 text-white opacity-90 overflow-hidden'>
                <ListWithIcon href='/#' name='Home' icon={<FaHome style={ICONSTYLENAVLIST} />} />
                <ListWithIcon href='/#' name='About' icon={<BsQuestionCircleFill style={ICONSTYLENAVLIST} />} />
                <ListWithIcon href='/#' name='Blog' icon={<MdOutlineArticle style={ICONSTYLENAVLIST} />} />
            </ul>
        </div>
    )
}

export default Navbar


