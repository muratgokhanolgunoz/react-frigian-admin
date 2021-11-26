/* eslint-disable no-restricted-globals */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Context from "../../../../../../context/Context";
import { showToast } from "../../../../../../core/functions";
import { getMapData } from "../../../../../../helpers/mapData";
import { replyFeed } from "../../../../../../services/FeedServices";

export class FeedAnswer extends PureComponent {
    static propTypes = {
        feedId: PropTypes.number.isRequired,
        collapse: PropTypes.func.isRequired,
    };

    state = {
        answer: "",
    };

    render() {
        const { feedId } = this.props;
        const { answer } = this.state;

        const reply = () => {
            if (confirm("The answer will be sent. Do you confirm ?")) {
                const formdata = new FormData();
                formdata.append("feedback_id", feedId);
                formdata.append("answer", answer);

                replyFeed(formdata)
                    .then((response) => {
                        if (response.status === 200) {
                            getMapData(this.context);
                            showToast(
                                "bottom-center",
                                response.data.msg,
                                "success",
                                5000
                            );
                            this.props.collapse(false);
                        }
                    })
                    .catch(() => {
                        showToast(
                            "bottom-center",
                            "The feedback already answered",
                            "error",
                            10000
                        );
                    });
            }
        };

        return (
            <div className="feed-answer">
                <div
                    className="custom-form-group"
                    style={{ marginTop: "100px" }}
                >
                    <textarea
                        id="answer"
                        name="answer"
                        type="text"
                        placeholder="Enter Answer"
                        value={answer}
                        rows={3}
                        onChange={(_e) =>
                            this.setState({ answer: _e.target.value })
                        }
                    />
                    <span onClick={() => reply()}>SEND</span>
                </div>
            </div>
        );
    }
}
FeedAnswer.contextType = Context;
export default FeedAnswer;
