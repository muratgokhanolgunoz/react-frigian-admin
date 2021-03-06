/* eslint-disable no-restricted-globals */
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Context from "../../../context/Context";
import FirmContext from "../../../context/FirmContext";
import Button from "../../../common/button/Button";
import Cropper from "react-cropper";
import Resizer from "react-image-file-resizer";
import { dataUriToBlob, showToast } from "../../../core/functions";
import { BiCrop } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";
import { FiImage } from "react-icons/fi";
import { AiOutlineUpload } from "react-icons/ai";
import "cropperjs/dist/cropper.css";
import CropPreview from "./CropPreview";
import style from "./LogoCropper.module.scss";
import { updateLogo } from "../../../services/FirmServices";

const LogoCropper = (props) => {
    const { logo, cancelCropAndResize, changePreviewLogo } = props;
    const [cropperLogo, setCropperLogo] = useState({});
    const [croppedLogoDataIri, setCroppedLogoDataUri] = useState("");
    const [croppedLogoBlob, setCroppedLogoBlob] = useState(null);
    const [preview, setPreview] = useState(false);

    const context = useContext(Context);
    const firmContext = useContext(FirmContext);

    const updateFirmLogo = () => {
        if (
            confirm(
                "This selection will update the logo of the " +
                    firmContext.firm.subdomain +
                    " company. Are you sure ?"
            )
        ) {
            if (croppedLogoBlob !== null) {
                const data = new FormData();
                data.append("firm_id", firmContext.firm.firm_id);
                data.append(
                    "file",
                    new File(
                        [croppedLogoBlob],
                        firmContext.firm.subdomain + "-logo",
                        { type: "image/png" }
                    )
                );

                updateLogo(context.token, data)
                    .then((response) => {
                        if (response.status === 200) {
                            showToast(
                                "bottom-right",
                                "Logo successfully updated",
                                "success"
                            );
                            changePreviewLogo(croppedLogoDataIri);
                        } else {
                            showToast("bottom-right", "Update failed", "error");
                        }
                    })
                    .catch(() => {
                        showToast("bottom-right", "Upload failed", "error");
                        console.warn("Error : Update Logo");
                    });
            } else {
                showToast(
                    "bottom-right",
                    "Please specify the area to be cut in the selected photo.",
                    "error"
                );
            }
        }
    };

    const resizeCompanyPhoto = (_file, _type, _function, _message) => {
        // 1 => blob
        // 2 => base64

        try {
            Resizer.imageFileResizer(
                _file,
                300,
                300,
                "PNG",
                100,
                0,
                (uri) => {
                    _function(uri);
                    showToast("bottom-right", _message, "success");
                },
                _type === 1 ? "blob" : "base64",
                300,
                0
            );
        } catch (err) {
            console.log(err);
            showToast("bottom-right", err, "error");
        }
    };

    const getCroppedCompanyLogo = () => {
        if (typeof cropperLogo !== "undefined") {
            // for upload from api
            resizeCompanyPhoto(
                dataUriToBlob(
                    cropperLogo.getCroppedCanvas().toDataURL(),
                    "image/jpg"
                ),
                1,
                setCroppedLogoBlob,
                "Crop successfully for base64 format"
            );

            // for view
            resizeCompanyPhoto(
                dataUriToBlob(
                    cropperLogo.getCroppedCanvas().toDataURL(),
                    "image/jpg"
                ),
                2,
                setCroppedLogoDataUri,
                "Crop successfully for blob format"
            );
        }
    };

    const clickPreview = () => {
        setPreview(preview === false ? true : false);
    };

    return (
        <div className={style.logoCropper}>
            <div className={style.logoButtons}>
                <Button
                    icon={<AiOutlineUpload />}
                    value=""
                    styles={`${style.logoButton} button-2`}
                    tooltipText="UPLOAD"
                    tooltipPlacement="top"
                    click={updateFirmLogo}
                />
                <Button
                    icon={<FiImage />}
                    value=""
                    styles={`${style.logoButton} button-1`}
                    tooltipText="PREVIEW"
                    tooltipPlacement="top"
                    click={clickPreview}
                />
                <Button
                    icon={<BiCrop />}
                    value=""
                    styles={`${style.logoButton} button-6`}
                    tooltipText="CROP"
                    tooltipPlacement="top"
                    click={getCroppedCompanyLogo}
                />
                <Button
                    icon={<VscClose />}
                    value=""
                    styles={`${style.logoButton} button-5`}
                    tooltipText="CANCEL"
                    tooltipPlacement="top"
                    click={() => cancelCropAndResize()}
                />
            </div>
            {preview ? (
                <CropPreview imgSrc={croppedLogoDataIri} />
            ) : (
                <Cropper
                    initialAspectRatio={1}
                    src={logo}
                    ref={cropperLogo}
                    viewMode={1}
                    guides={true}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    background={true}
                    responsive={true}
                    checkOrientation={false}
                    onInitialized={(instance) => {
                        setCropperLogo(instance);
                    }}
                />
            )}
        </div>
    );
};

LogoCropper.propTypes = {
    logo: PropTypes.string.isRequired,
    cancelCropAndResize: PropTypes.func.isRequired,
};

export default LogoCropper;
