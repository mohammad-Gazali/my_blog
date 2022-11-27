import { useRef } from 'react';
import { ListWithIcon, NavLink } from '.';
import {FaBars, FaHome} from 'react-icons/fa';
import {BsQuestionCircleFill} from 'react-icons/bs';
import {MdOutlineArticle} from 'react-icons/md';
import { Link } from 'react-router-dom';


function Navbar(props){

    const mainNav = useRef(null);
    const colNavList = useRef(null);

    function navToggle(e) {
        colNavList.current.classList.toggle('active-nav-list')
    }

    window.onscroll = () => {
        if (window.scrollY !== 0) {
            mainNav.current.classList.remove('bg-transparent')
            mainNav.current.classList.add('bg-mydark')
            colNavList.current.classList.remove('bg-transparent')
            colNavList.current.classList.add('bg-mydark')
        } else {
            mainNav.current.classList.remove('bg-mydark')
            mainNav.current.classList.add('bg-transparent')
            colNavList.current.classList.remove('bg-mydark')
            colNavList.current.classList.add('bg-transparent')
        }
    }

    const ICONSTYLENAVLIST = {display: 'inline-block', fontSize: 25};

    return (
        <div className='sticky top-0 z-50 w-full'>
            <nav ref={mainNav} className='w-full px-10 py-5 bg-transparent text-white flex flex-row items-center justify-between opacity-95 transition-all duration-200'>
                <div className='font-bold text-2xl tracking-wide'>
                    <Link to="/">
                        Elgazali
                    </Link>
                </div>
                <div className='h-8 w-8 flex justify-center items-center relative'>
                    <div className='md:hidden w-full cursor-pointer h-full absolute' onClick={navToggle} />
                    <div className='md:hidden'>
                        <FaBars style={{fontSize: 30}}/>
                    </div>
                </div>
                <ul className='hidden md:flex flex-row items-center justify-center gap-6 text-white'>
                    <NavLink name='Home' href='/' />
                    <NavLink name='About' href='/' />
                    <NavLink name='Blog' href='/' />
                </ul>
            </nav> 
            <ul ref={colNavList} id='collapse-list-nav' className='flex-col w-full pl-10 py-5 items-start justify-evenly bg-transparent gap-1 text-white opacity-90 overflow-hidden'>
                <ListWithIcon href='/#' name='Home' icon={<FaHome style={ICONSTYLENAVLIST} />} />
                <ListWithIcon href='/#' name='About' icon={<BsQuestionCircleFill style={ICONSTYLENAVLIST} />} />
                <ListWithIcon href='/#' name='Blog' icon={<MdOutlineArticle style={ICONSTYLENAVLIST} />} />
            </ul>
        </div>
    )
}

export default Navbar


