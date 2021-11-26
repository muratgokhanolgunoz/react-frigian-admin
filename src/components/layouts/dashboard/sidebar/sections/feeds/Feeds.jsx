import React, { useContext } from "react";
import Context from "../../../../../../context/Context";
import FeedRow from "./FeedRow";
import "./feeds.scss";

const Feeds = (_) => {
    const context = useContext(Context);

    return (
        <div id="sidebar-feeds">
            <div id="feed-title">
                <span>FRIGIAN FEEDS</span>
            </div>
            <div id="feed-body">
                {context.feeds.map((feed) => (
                    <FeedRow key={feed.feedback_id} feed={feed} />
                ))}
            </div>
        </div>
    );
};
export default Feeds;
