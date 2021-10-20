import React from 'react'

const CropPreview = ({ imgSrc }) => {
    return (
        <div id="crop-preview">
            {
                imgSrc !== ""
                ? <img src={imgSrc} alt=""></img>
                : <div>No cropped image</div>
            }
        </div>
    )
}
export default CropPreview;