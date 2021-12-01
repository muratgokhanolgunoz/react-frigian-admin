/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Context from "../../../../context/Context";
import { FiRefreshCcw } from "react-icons/fi";
import style from "./ResetButton.module.scss";

const ResetButton = (props) => {
    const { setCenter } = props;
    const context = useContext(Context);

    useEffect(() => {
        handleClick();
    }, []);

    const handleClick = () => {
        setCenter({ lat: 39.0, lng: 35.0 });
        context.funcHandleSetMapZoom(6);
    };

    return (
        <div className={style.resetButton}>
            <button onClick={() => handleClick()}>
                <FiRefreshCcw />
            </button>
        </div>
    );
};

ResetButton.propTypes = {
    setCenter: PropTypes.func.isRequired,
};

export default ResetButton;
