/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from 'react';
import { VscListSelection } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import Context from '../../../../../context/Context';
import { authentication } from '../../../../../helpers/authentication';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { VscChromeClose } from 'react-icons/vsc';

const Navbar = () => {
    let context = useContext(Context);

    useEffect(() => {
        if (window.innerWidth >= 1200) {
            document.getElementById("sidebar-toggle-open").setAttribute("style", "display: none !important");
            document.getElementById("nav").setAttribute("style", "display: block !important");
            document.getElementById("nav-toggle-open").setAttribute("style", "display: none !important");
            document.getElementById("nav-toggle-close").setAttribute("style", "display: none !important");
        } else {
            document.getElementById("sidebar-toggle-open").setAttribute("style", "display: block !important");
            document.getElementById("nav").setAttribute("style", "display: none !important");
            document.getElementById("nav-toggle-open").setAttribute("style", "display: block !important");
            document.getElementById("nav-toggle-close").setAttribute("style", "display: block !important");
        }
    }, []);

    const sidebarOpen = () => {
        if (window.innerWidth < 1200) {
            document.getElementById("sidebar").setAttribute("style", "display: block !important");
        }
    }

    const navOpen = () => {
        if (window.innerWidth < 1200) {
            document.getElementById("nav").setAttribute("style", "display: block !important");
        }
    }

    const navclose = () => {
        if (window.innerWidth < 1200) {
            document.getElementById("nav").setAttribute("style", "display: none !important");
        }
    }

    return (
        <div id="navbar">
            <div id="sidebar-toggle-open" onClick={() => sidebarOpen()}>
                <VscListSelection />
            </div>
            <div id="nav-toggle-open" onClick={() => navOpen()}>
                <VscListSelection />
            </div>
            <div id="nav">
                <div id="nav-toggle-close" onClick={() => navclose()}>
                    <VscChromeClose />
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/companies">Companies</Link>
                    </li>
                    <li>
                        <Link to="/messages">Messages</Link>
                    </li>
                    <li>
                        <Link to="/announcements">Announcements</Link>
                    </li>
                    <li>
                        <Link to="/campain">Campain Codes</Link>
                    </li>
                    <li>
                        <a style={{ cursor: 'pointer' }} onClick={() => authentication.logout(context)}>
                            <AiOutlinePoweroff />
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    );
}
export default Navbar;