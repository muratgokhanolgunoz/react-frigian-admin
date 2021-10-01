import React, { useContext } from 'react'
import Context from '../../../../context/Context';
import FeedItem from './FeedItem';

const Feeds = () => {

    const context = useContext(Context);

    return (
        <div id="sidebar-feeds">
            <div id="feed-title">
                <span>FRIGIAN FEEDS</span>
            </div>

            {
                context.feeds.map((feed, index) => (
                    <FeedItem key={index} feed={feed} />
                ))
            }

        </div>
    )
}
export default Feeds;