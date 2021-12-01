import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { VscChromeClose } from "react-icons/vsc";
import style from "./Sidebar.module.scss";
import Feeds from "./sections/feeds/Feeds";
import FileStatistics from "./sections/statistics/FileStatistics";

const Sidebar = (_) => {
    useEffect(() => {
        if (window.innerWidth >= 1200) {
            document
                .getElementById("sidebar")
                .setAttribute("style", "display: block !important");
            document
                .getElementById("sidebar-toggle-close")
                .setAttribute("style", "display: none !important");
        } else {
            document
                .getElementById("sidebar")
                .setAttribute("style", "display: none !important");
            document
                .getElementById("sidebar-toggle-close")
                .setAttribute("style", "display: block !important");
        }
    }, []);

    const sidebarClose = () => {
        if (window.innerWidth < 1200) {
            document
                .getElementById("sidebar")
                .setAttribute("style", "display: none !important");
        }
    };

    return (
        <div id="sidebar" className={style.sidebar}>
            <div
                id="sidebar-toggle-close"
                className={style.sidebarToggleClose}
                onClick={() => sidebarClose()}
            >
                <VscChromeClose />
            </div>
            <div id="sidebar-logo" className={style.sidebarLogo}>
                <Image
                    src="./assets/img/frigian-light.png"
                    alt=""
                    fluid
                ></Image>
            </div>

            <div id="sidebar-body" className={style.sidebarBody}>
                <FileStatistics />
                <Feeds />
            </div>
        </div>
    );
};
export default Sidebar;
