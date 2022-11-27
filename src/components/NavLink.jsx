import { Link } from "react-router-dom"

function NavLink(props) {
    return (
        <li className='inline-block hover:text-myyellow hover:scale-125 text-lg'>
            <Link to={props.href}>
                {props.name}
            </Link>
        </li>
    )
}

export default NavLink