import React, { useState } from "react";
import PropTypes from "prop-types";
import FeedHeader from "./FeedHeader";
import FeedMessage from "./FeedMessage";
import FeedAnswer from "./FeedAnswer";
import Modal from "../../../../../../common/modal/Modal";
import { AiOutlineCheck } from "react-icons/ai";

const FeedRow = ({ feed }) => {
    const [modalState, setModalState] = useState(false);

    const toggleModal = (_status) => {
        if (modalState !== _status) setModalState(!modalState);
    };

    return (
        <div className="feed-row" onClick={() => toggleModal(true)}>
            <div className="feed-row-wrapper">
                <FeedHeader color={feed.color} companyName={feed.name} />
                {feed.replied && (
                    <div className="feed-right">
                        <span>
                            <AiOutlineCheck />
                        </span>
                    </div>
                )}
            </div>

            {modalState && (
                <Modal
                    header={
                        <div className="feed-row">
                            <FeedHeader
                                color={feed.color}
                                companyName={feed.name}
                                user={feed.user.toUpperCase()}
                            />
                        </div>
                    }
                    collapse={toggleModal}
                >
                    {/* Firma tarafından gelen mesaj */}
                    <FeedMessage
                        status={
                            1
                        } /* Gelen veya giden mesajı ayırabilmek için [ 1 => Gelen mesaj ] */
                        note={feed.note}
                        date={feed.time}
                        user={feed.user}
                        wrap="left"
                    />
                    {/* Gelen mesaja cevap olarak gönderilen mesaj veya gönderi kutucuğu */}
                    {!feed.replied ? (
                        /*  */
                        <FeedAnswer
                            feedId={feed.feedback_id}
                            collapse={toggleModal}
                        />
                    ) : (
                        /* Gönderilen cevap */
                        feed.replied &&
                        feed.answer_note !== "" &&
                        feed.answer_note !== null && (
                            <>
                                <FeedMessage
                                    status={
                                        0
                                    } /* Gelen veya giden mesajı ayırabilmek için [ 0 => Giden mesaj ] */
                                    note={feed.answer_note}
                                    date={
                                        feed.answer_time !== null
                                            ? feed.answer_time.substr(0, 16)
                                            : ""
                                    }
                                    user={"Frigian Team"}
                                    wrap="right"
                                />
                            </>
                        )
                    )}
                </Modal>
            )}
        </div>
    );
};

FeedRow.propTypes = {
    feed: PropTypes.object.isRequired
};

export default FeedRow;
