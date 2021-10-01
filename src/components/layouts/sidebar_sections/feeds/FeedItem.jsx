import React, { Fragment } from 'react';
import { Accordion } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';

const FeedItem = (props) => {

    const { feed } = props;
    const feedColors = ["#008001", "#e6e427", "#ff0000"];

    return (
        <Fragment>
            <Accordion style={{ borderColor: "red" }}>
                <div className="feed-box">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className="feed-header">
                                <span className="feed-color" style={{ backgroundColor: `${feedColors[feed.color - 1]}` }}></span>
                                <div className="feed-firm">
                                    <span className="feed-firm">{feed.name}</span>
                                </div>
                                {
                                    feed.replied &&
                                    (
                                        <span className="feed-replied">
                                            &emsp;<FaCheck />
                                        </span>
                                    )
                                }
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="feed-body">
                                <p>{feed.note}</p>
                            </div>
                            <div className="feed-footer">
                                <span className="feed-user">{feed.user}</span>
                                <span className="feed-time">{feed.time}</span>
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                </div>
            </Accordion>
        </Fragment>
    )
}
export default FeedItem;