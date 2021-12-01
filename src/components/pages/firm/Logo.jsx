/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";
import style from "./Logo.module.scss";

const Logo = (props) => {
    const { imageSource, onChangeUploadFile } = props;

    return (
        <div className={style.logo}>
            <img src={imageSource}></img>
            <div
                className="firm-details-form-group"
                style={{ padding: "0 10px", marginTop: "0" }}
            >
                <label htmlFor="upload-file"></label>
                <input
                    id="upload-file"
                    name="upload-file"
                    type="file"
                    onChange={(_e) => onChangeUploadFile(_e.target.files[0])}
                    accept="image/*"
                />
            </div>
        </div>
    );
};

Logo.propTypes = {
    imageSource: PropTypes.string.isRequired,
    onChangeUploadFile: PropTypes.func.isRequired,
};

export default Logo;
