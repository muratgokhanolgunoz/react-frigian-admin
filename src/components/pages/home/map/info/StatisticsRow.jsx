import React from "react";
import PropTypes from "prop-types";
import style from "./StatisticsRow.module.scss";

const StatisticsRow = ({ title, value }) => {
    return (
        <div className={style.row}>
            <div className={style.left}>
                <b>{title}</b>
            </div>
            <div className={style.right}>{value}</div>
        </div>
    )
}

StatisticsRow.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}
export default StatisticsRow;
