import React, { Fragment, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { VscCheck } from 'react-icons/vsc';
import FeedDropdown from '../../components/dropdown/feed/FeedDropdown';
import FeedAnswerButton from './FeedAnswerButton';

const FeedItem = (props) => {

    const { rowIndex, feed } = props;
    const feedColors = ["#008001", "#e6e427", "#ff0000"];

    const [showReplyWindow, setShowReplyWindow] = useState(false);

    return (
        <Fragment>
            {
                showReplyWindow === true
                    ? <FeedDropdown hideReplyWindow={setShowReplyWindow} id={feed.feedback_id} />
                    : null
            }
            <Accordion style={{ borderColor: "red" }} defaultActiveKey="0">
                <div className="feed-box">
                    <Accordion.Item eventKey={rowIndex}>
                        <Accordion.Header>
                            <div className="feed-header">
                                <span className="feed-color" style={{ backgroundColor: `${feedColors[feed.color - 1]}` }}></span>
                                <div className="feed-firm">
                                    <span className="feed-firm">{feed.name}</span>
                                </div>
                                <div className="feed-replied">
                                    {
                                        feed.replied
                                            ? <VscCheck />
                                            : <FeedAnswerButton showReplyWindow={setShowReplyWindow} />
                                    }
                                </div>
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