import React from "react";
import style from "./CropPreview.module.scss";

const CropPreview = ({ imgSrc }) => {
    return (
        <div className={style.cropPreview}>
            {imgSrc !== "" ? (
                <img src={imgSrc} alt=""></img>
            ) : (
                <div>No cropped image</div>
            )}
        </div>
    );
};
export default CropPreview;
