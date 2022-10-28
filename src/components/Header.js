import '../assets/css/comp_style/Header.css';

import DrawerAppBar from './sub_com/Navbar';
import Landscape from './sub_com/Landscape';


function Header() {
    return (
        <div>
            <DrawerAppBar />
            <Landscape />
        </div>
    )
}

export default Header