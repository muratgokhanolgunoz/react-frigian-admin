import React from "react";
import PropTypes from "prop-types";

const FileStatisticsItem = ({ icon, value, text }) => {
    return (
        <>
            <div className="file-statistics-box">
                <div className="file-statistics-item">
                    <div className="file-statistics-row">
                        <span className="file-statistics-icon">{icon}</span>
                        <span className="file-statistics-text">{value}</span>
                    </div>
                    <div className="file-statistics-row">
                        <span className="file-statistics-title">{text}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

FileStatisticsItem.propTypes = {
    icon: PropTypes.element.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default FileStatisticsItem;
