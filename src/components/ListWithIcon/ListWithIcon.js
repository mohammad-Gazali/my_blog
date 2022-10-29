import './ListWithIcon.css'


function ListWithIcon(props) {
    return (
        <li className='text-xl pl-2 py-2 hover:text-mylightblue hover:bg-mylight hover:pl-8 w-11/12 rounded-lg transition-all duration-200'><a className='w-full' href={props.href}>{props.icon} <span className='ml-1'>{props.name}</span></a></li>
    )
}

export default ListWithIcon