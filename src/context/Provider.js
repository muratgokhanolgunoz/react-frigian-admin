import React, { useState } from "react";
import Context from "./Context";

const Provider = props => {
    const [firms, setFirms] = useState([]);
    const [feeds, setFeeds] = useState([]);
    const [files, setFiles] = useState([]);
    const [token, setToken] = useState("");
    const [zoom, setZoom] = useState(6.8);

    return (
        <Context.Provider
            value={{
                firms,
                feeds,
                files,
                token,
                zoom,
                funcHandleSetFirms: (_firms) => setFirms(_firms),
                funcHandleSetFeeds: (_feeds) => setFeeds(_feeds),
                funcHandleSetFiles: (_files) => setFiles(_files),
                funcHandleSetToken: (_token) => setToken(_token),
                funcHandleSetMapZoom: (_zoom) => setZoom(_zoom),
            }}
        >
            {props.children}
        </Context.Provider>
    );
}
export default Provider;