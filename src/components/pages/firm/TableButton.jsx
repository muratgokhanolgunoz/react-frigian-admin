import React, { useContext } from 'react'
import FirmContext from '../../../context/FirmContext'
import { AiOutlineArrowRight } from 'react-icons/ai'

const TableButton = props => {

    const context = useContext(FirmContext);
    const {firm} = props;

    return (
        <div id="table-button">
            <button className="button button-3" onClick={() => { context.funcHandleSetTableOrDetails(1); context.funcHandleSetSelectedFirm(firm) }}>
                Details &nbsp; <AiOutlineArrowRight style={{ marginTop: "-3px" }} />
            </button>
        </div>
    )
}
export default TableButton