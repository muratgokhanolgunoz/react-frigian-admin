import React, { useContext } from "react";
import FirmContext from "../../../context/FirmContext";
import { AiOutlineArrowRight } from "react-icons/ai";

const TableButton = (props) => {
    const firmContext = useContext(FirmContext);
    const { firm } = props;

    return (
        <div id="table-button">
            <button
                className="button button-3"
                onClick={() => {
                    firmContext.funcHandleSetTableOrDetails(1);
                    firmContext.funcHandleSetSelectedFirm(firm);
                }}
            >
                Details &nbsp;{" "}
                <AiOutlineArrowRight style={{ marginTop: "-3px" }} />
            </button>
        </div>
    );
};
export default TableButton;
