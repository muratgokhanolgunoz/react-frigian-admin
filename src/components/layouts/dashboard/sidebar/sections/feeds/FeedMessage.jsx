import React from "react";
import PropTypes from "prop-types";
import style from "./FeedMessage.module.scss";

const FeedMessage = ({ status, note, date, user, wrap }) => {
    return (
        <div className={style.feedMessage}>
            <div className={style.message} style={{ float: wrap }}>
                <p
                    style={{
                        backgroundColor: `var(--color-${
                            status === 0 ? "2" : "6"
                        })`,
                        color: `var(--color-${status === 0 ? "3" : "2"})`,
                    }}
                >
                    {note}
                </p>
                <span>{date}</span>
            </div>
        </div>
    );
};

FeedMessage.propTypes = {
    status: PropTypes.number.isRequired,
    note: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.string,
    wrap: PropTypes.string.isRequired,
};

export default FeedMessage;
