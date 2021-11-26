import React, { useContext } from "react";
import Context from "../../../../../../context/Context";
import FileStatisticsItem from "./FileStatisticsItem";
import { FaTag, FaShip, FaFlagCheckered, FaEnvelope } from "react-icons/fa";

const FileStatistics = () => {
    const context = useContext(Context);

    return (
        <div id="sidebar-file-statistics">
            {context.files.map((file, i) => (
                <div key={i}>
                    <FileStatisticsItem
                        icon={<FaTag />}
                        value={file.offer}
                        text="Created Offer"
                    />
                    <FileStatisticsItem
                        icon={<FaShip />}
                        value={file.operation}
                        text="Operation Start"
                    />
                    <FileStatisticsItem
                        icon={<FaFlagCheckered />}
                        value={file.done}
                        text="Operation Done"
                    />
                    <FileStatisticsItem
                        icon={<FaEnvelope />}
                        value={file.messages}
                        text="Messages Sent"
                    />
                </div>
            ))}
        </div>
    );
};
export default FileStatistics;
