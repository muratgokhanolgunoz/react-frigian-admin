import React, { useEffect } from 'react';
import Feeds from './sections/feeds/Feeds';
import FileStatistics from './sections/statistics/FileStatistics';
import { Image } from 'react-bootstrap';
import { VscChromeClose } from 'react-icons/vsc';

const Sidebar = () => {
    useEffect(() => {
        if (window.innerWidth >= 1200) {
            document.getElementById("sidebar").setAttribute("style", "display: block !important");
            document.getElementById("sidebar-toggle-close").setAttribute("style", "display: none !important");
        } else {
            document.getElementById("sidebar").setAttribute("style", "display: none !important");
            document.getElementById("sidebar-toggle-close").setAttribute("style", "display: block !important");
        }
    }, []);

    const sidebarClose = () => {
        if (window.innerWidth < 1200) {
            document.getElementById("sidebar").setAttribute("style", "display: none !important");
        }
    }

    return (
        <div id="sidebar">
            <div id="sidebar-toggle-close" onClick={() => sidebarClose()}>
                <VscChromeClose />
            </div>
            <div id="sidebar-logo">
                <Image src="https://frigian.net/assets/img/frigian-light.png" alt="" fluid></Image>
            </div>

            <div id="sidebar-body">
                <FileStatistics />
                <Feeds />
            </div>
        </div>
    )
}
export default Sidebar;