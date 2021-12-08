import React, { useState } from "react";
import Context from "./Context";

const Provider = (props) => {
    const [firms, setFirms] = useState([]);
    const [feeds, setFeeds] = useState([]);
    const [files, setFiles] = useState([]);
    const [numberOfActiveUsers, setNumberOfActiveUsers] = useState(0);
    const [numberOfAllUsers, setNumberOfAllUsers] = useState(0);
    const [numberOfActiveFirms, setNumberOfActiveFirms] = useState(0);
    const [numberOfAllFirms, setNumberOfAllFirms] = useState(0);
    
    const [token, setToken] = useState("");
    const [zoom, setZoom] = useState(6);

    return (
        <Context.Provider
            value={{
                firms,
                feeds,
                files,
                numberOfActiveUsers,
                numberOfAllUsers,
                numberOfActiveFirms,
                numberOfAllFirms,
                token,
                zoom,
                funcHandleSetFirms: (_firms) => setFirms(_firms),
                funcHandleSetFeeds: (_feeds) => setFeeds(_feeds),
                funcHandleSetFiles: (_files) => setFiles(_files),
                funcHandle: (_files) => (_files),
                funcHandleSetNumberOfActiveUsers: (_activeUsers) => setNumberOfActiveUsers(_activeUsers),
                funcHandleSetNumberOfAllUsers: (_allUsers) => setNumberOfAllUsers(_allUsers),
                funcHandleSetNumberOfActiveFirms: (_activeFirms) => setNumberOfActiveFirms(_activeFirms),
                funcHandleSetNumberOfAllFirms: (_allFirms) => setNumberOfAllFirms(_allFirms),
                funcHandleSetToken: (_token) => setToken(_token),
                funcHandleSetMapZoom: (_zoom) => setZoom(_zoom),
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
export default Provider;
