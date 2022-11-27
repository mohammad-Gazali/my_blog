

function FooterLink(props) {
    return (
        <a href={props.href} className='text-xl my-footer-link'>
            <div>{props.icon}</div><span>{props.name}</span>
        </a>
    )
}


export default FooterLink