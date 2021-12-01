import React from "react";
import PropTypes from "prop-types";
import style from "./FileStatisticsItem.module.scss";

const FileStatisticsItem = ({ icon, value, text }) => {
    return (
        <>
            <div className={style.fileStatisticsBox}>
                <div className={style.fileStatisticsItem}>
                    <div className={style.fileStatisticsRow}>
                        <span className={style.fileStatisticsIcon}>{icon}</span>
                        <span className={style.fileStatisticsText}>
                            {value}
                        </span>
                    </div>
                    <div className={style.fileStatisticsRow}>
                        <span className={style.fileStatisticsTitle}>
                            {text}
                        </span>
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
