import React, { Fragment, useContext } from 'react';
import Context from '../../../../../../context/Context';
import { FaShip, FaFlagCheckered, FaTag, FaEnvelope } from 'react-icons/fa';

const FileStatistics = () => {

    const context = useContext(Context);

    return (
        <div id="sidebar-file-statistics">
            {
                context.files.map((file, i) => (
                    <Fragment key={i}>
                        <div className="file-statistics-box">
                            <div className="file-statistics-item file-statistics-margin-left">
                                <div className="file-statistics-row">
                                    <span className="file-statistics-icon">
                                        <FaTag />
                                    </span>
                                    <span className="file-statistics-text">{file.offer}</span>
                                </div>
                                <div className="file-statistics-row">
                                    <span className="file-statistics-title">Created Offer</span>
                                </div>
                            </div>
                        </div>

                        <div className="file-statistics-box">
                            <div className="file-statistics-item file-statistics-margin-right">
                                <div className="file-statistics-row">
                                    <span className="file-statistics-icon">
                                        <FaShip />
                                    </span>
                                    <span className="file-statistics-text">{file.operation}</span>
                                </div>
                                <div className="file-statistics-row">
                                    <span className="file-statistics-title">Operation Start</span>
                                </div>
                            </div>
                        </div>

                        <div className="file-statistics-box">
                            <div className="file-statistics-item file-statistics-margin-left">
                                <div className="file-statistics-row">
                                    <span className="file-statistics-icon">
                                        <FaFlagCheckered />
                                    </span>
                                    <span className="file-statistics-text">{file.done}</span>
                                </div>
                                <div className="file-statistics-row">
                                    <span className="file-statistics-title">Operation Done</span>
                                </div>
                            </div>
                        </div>

                        <div className="file-statistics-box">
                            <div className="file-statistics-item file-statistics-margin-right">
                                <div className="file-statistics-row">
                                    <span className="file-statistics-icon">
                                        <FaEnvelope />
                                    </span>
                                    <span className="file-statistics-text">{file.messages}</span>
                                </div>
                                <div className="file-statistics-row">
                                    <span className="file-statistics-title">Messages Sent</span>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ))
            }
        </div>
    )
}
export default FileStatistics;