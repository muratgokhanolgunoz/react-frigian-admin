import React, { useContext } from "react";
import Context from "../../../../../../context/Context";
import FeedRow from "./FeedRow";
import style from "./Feed.module.scss";

const Feeds = (_) => {
    const context = useContext(Context);

    return (
        <div className={style.sidebarFeeds}>
            <div className={style.feedTitle}>
                <span>FRIGIAN FEEDS</span>
            </div>
            <div className={style.feedBody}>
                {context.feeds.map((feed) => (
                    <FeedRow key={feed.feedback_id} feed={feed} />
                ))}
            </div>
        </div>
    );
};
export default Feeds;
