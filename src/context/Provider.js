import React, { useState } from 'react';
import Context from './Context';

const Provider = (props) => {

    const [firms, setFirms] = useState([]);
    const [feeds, setFeeds] = useState([]);
    const [files, setFiles] = useState([]);
    const [token, setToken] = useState("");

    return (
        <Context.Provider
            value={{
                firms,
                feeds,
                files,
                token,
                funcHandleSetFirms: (_firms) => setFirms(_firms),
                funcHandleSetFeeds: (_feeds) => setFeeds(_feeds),
                funcHandleSetFiles: (_files) => setFiles(_files),
                funcHandleSetToken: (_token) => setToken(_token)
            }}>
            {props.children}
        </Context.Provider>
    );
}
export default Provider;