import React, { useState, useContext } from 'react';
import Context from '../../../../../context/Context';
import PropTypes from 'prop-types';
import FeedServices from '../../../../../services/FeedServices';
import { showToast } from '../../../../../core/functions';
import { getMapData } from '../../../../../helpers/mapData';
import { IoIosSend } from 'react-icons/io';
import { VscChromeClose } from 'react-icons/vsc';
import './_feed.scss';

const FeedDropdown = props => {
    const context = useContext(Context);
    let feedServices = new FeedServices();
    const [answer, setAnswer] = useState("");

    const replyFeed = (_e) => {
        _e.preventDefault();

        if (!answer) {
            showToast("bottom-center", "Answer cannot be empty", "error", 5000);
        } else {
            const formdata = new FormData();
            formdata.append("feedback_id", props.id);
            formdata.append("answer", answer);

            feedServices.replyFeed(formdata)
                .then((response) => {
                    if (response.status === 200) {
                        getMapData(context);
                        showToast("bottom-center", response.data.msg, "success", 5000);
                        props.hideReplyWindow(false);
                    }
                })
                .catch(() => {
                    showToast("bottom-center", "The feedback already answered", "error", 10000);
                })
        }
    }

    return (
        <div id="feed-dropdown">
            <div className="feed-dropdown-header">
                <div className="feed-dropdown-arrow-left"></div>
                <div className="feed-dropdown-close-button" onClick={() => props.hideReplyWindow(false)}>
                    <VscChromeClose />
                </div>
            </div>
            <form onSubmit={(e) => replyFeed(e)}>
                <textarea id="answer" name="answer" rows="4" defaultValue={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>
                <button className="button button-2">
                    <IoIosSend /> &nbsp; SEND
                </button>
            </form>
        </div>
    )
}

FeedDropdown.propTypes = {
    hideReplyWindow: PropTypes.func.isRequired
}

export default FeedDropdown;