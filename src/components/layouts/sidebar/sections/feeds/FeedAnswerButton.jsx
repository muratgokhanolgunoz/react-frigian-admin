import React from 'react';
import PropTypes from 'prop-types';
import { BiReplyAll } from 'react-icons/bi';

const FeedAnswerButton = props => {
    return (
        <div id="feed-answer-button">
            <span className="button button-1" onClick={() => props.showReplyWindow(true)}>
                <BiReplyAll /> &nbsp; Reply
            </span>
        </div>
    );
}

FeedAnswerButton.propTypes = {
    showReplyWindow: PropTypes.func.isRequired
}

export default FeedAnswerButton;