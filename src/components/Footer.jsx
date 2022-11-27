import { FooterLink } from '.'
import { BsGithub, BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';


function Footer(props) {
    const ICONSTYLEFOOTER = {display: 'inline-block', fontSize: 25};
    return (
        <footer className='absolute bottom-0 left-0 w-full flex flex-col bg-mydark gap-6 px-5 py-7 text-mylight'>
            <div className='flex flex-row flex-wrap justify-center gap-5'>
                <FooterLink name="Instagram" href="/#" icon={<BsInstagram style={ICONSTYLEFOOTER}/>} />
                <FooterLink name="Facbook" href="/#" icon={<BsFacebook style={ICONSTYLEFOOTER}/>} />
                <FooterLink name="GitHub" href="/#" icon={<BsGithub style={ICONSTYLEFOOTER}/>} />
                <FooterLink name="Twitter" href="/#" icon={<BsTwitter style={ICONSTYLEFOOTER}/>} />
            </div>
            <div className='text-center'>
                Copyright © 2022 All Rights Are Reserved
            </div>
        </footer>
    )
}

export default Footer