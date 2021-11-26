import React from "react";
import PropTypes from "prop-types";

const FeedHeader = ({ color, companyName, user }) => {
    const feedColors = ["#008001", "#e6e427", "#ff0000"];
    return (
        <>
            <div className="feed-header">
                <span
                    className="feed-header-color"
                    style={{
                        backgroundColor: `${feedColors[color - 1]}`,
                    }}
                ></span>
                <span className="feed-header-company-name">{companyName}</span>
                {user && (
                    <span className="feed-header-user">{` [ ${user} ]`}</span>
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
