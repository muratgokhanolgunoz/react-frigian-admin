import React, { useContext } from 'react'
import Context from '../../../context/Context';
import { FaCheck } from 'react-icons/fa';

const Feeds = () => {

    const context = useContext(Context);
    console.log(context.token);
    const feedColors = ["#008001", "#e6e427", "#ff0000"];

    return (
        <div id="sidebar-feeds">
            {
                context.feeds.map((feed, i) => (
                    <div className="feed-box" key={i}>
                        <div className="feed-header">
                            <span className="feed-color" style={{ backgroundColor: `${feedColors[feed.color - 1]}` }}></span>
                            <div className="feed-firm">
                                <span className="feed-firm">{feed.name}</span>
                            </div>
                            {
                                feed.replied &&
                                (
                                    <span className="feed-replied">
                                        <FaCheck />
                                    </span>
                                )
                            }
                        </div>
                        <div className="feed-body">
                            <p>{feed.note}</p>
                        </div>
                        <div className="feed-footer">
                            <span className="feed-user">{feed.user}</span>
                            <span className="feed-time">{feed.time}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Feeds;