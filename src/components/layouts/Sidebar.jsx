import React from 'react';
import Feeds from './sidebar_sections/feeds/Feeds';
import FileStatistics from './sidebar_sections/statistics/FileStatistics';
import { Image } from 'react-bootstrap';

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