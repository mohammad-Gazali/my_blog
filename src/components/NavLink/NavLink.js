import './NavLink.css'


function NavLink(props) {
    return (
        <li className='inline-block hover:text-white text-lg'><a href={props.href}>{props.name}</a></li>
    )
}

export default NavLink