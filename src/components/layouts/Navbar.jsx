/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { VscListSelection } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import { AiOutlinePoweroff } from 'react-icons/ai';

const Navbar = () => {
    let context = useContext(Context);

    return (
        <div id="navbar">
            <div id="sidebar-toggle">
                <VscListSelection />
            </div>
            <div id="nav">
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
                        <Link to="/messages">Campain Codes</Link>
                    </li>
                    <li>
                        <a style={{ cursor: 'pointer', backgroundColor: "var(--color-2)", color: "#fff", padding: "10px" }} onClick={() => context.funcHandleSetToken("")}>
                            <AiOutlinePoweroff />&emsp;LOGOUT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;