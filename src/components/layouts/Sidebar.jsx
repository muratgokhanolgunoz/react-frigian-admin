import React from 'react';
import Feeds from './sidebar_sections/Feeds';
import { Image } from 'react-bootstrap';
import FileStatistics from './sidebar_sections/FileStatistics';

const Sidebar = () => {
    return (
        <div id="sidebar">
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
export default Sidebar