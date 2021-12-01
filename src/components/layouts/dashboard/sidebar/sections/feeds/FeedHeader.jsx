import React from "react";
import PropTypes from "prop-types";
import style from "./FeedHeader.module.scss";

const FeedHeader = ({ color, companyName, user }) => {
    const feedColors = ["#008001", "#e6e427", "#ff0000"];
    return (
        <>
            <div className={style.feedHeader}>
                <span
                    className={style.feedHeaderColor}
                    style={{
                        backgroundColor: `${feedColors[color - 1]}`,
                    }}
                ></span>
                <span className={style.feedHeaderCompanyName}>
                    {companyName}
                </span>
                {user && (
                    <span
                        className={style.feedHeaderUser}
                    >{` [ ${user} ]`}</span>
                )}
            </div>
        </>
    );
};

FeedHeader.propTypes = {
    color: PropTypes.number.isRequired,
    companyName: PropTypes.string.isRequired,
    user: PropTypes.string,
};

export default FeedHeader;
