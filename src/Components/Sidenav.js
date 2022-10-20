import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {FaHome} from 'react-icons/fa';
import {FaTools} from 'react-icons/fa';
import {FaQuestionCircle} from 'react-icons/fa';
import {FaFolderOpen} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Sidenav() {
    return <SideNav
        on select={selected=> {
            console.log(selected)
        }} className='mySideNav'>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem>
                <NavIcon><FaHome className='homeIcon'/></NavIcon>
                <NavText className='navText'>Home</NavText>
            </NavItem>
            <NavItem>
                <NavIcon><FaQuestionCircle className='aboutIcon' /></NavIcon>
                <NavText className='navText'><Link to='aboutpuppy'>About Us</Link>
            </NavText></NavItem>
            <NavItem>
                <NavIcon><FaFolderOpen className='portfolioIcon' /></NavIcon>
                <NavText className='navText'>Portfolio</NavText>
            </NavItem>
            <NavItem>
                <NavIcon><FaTools className='settingsIcon' /></NavIcon>
                <NavText className='navText'>Settings</NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
}
export default Sidenav