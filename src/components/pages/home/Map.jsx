/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useState, memo } from 'react';
import Context from '../../../context/Context';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import ResetButton from './ResetButton';
import { FaUser } from 'react-icons/fa';
import mapStyle from '../../../utils/google_maps/styles';

const firmColors = ["#8b8989", "#008001", "#ff0000"];

const Map = () => {
    const context = useContext(Context);
    const [center, setCenter] = useState({ lat: 39.0, lng: 35.0 });
    const [isOpenInfoWindow, setIsOpenInfoWindow] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [firmUsers, setFirmUsers] = useState([]);

    const toggleInfoWindow = (_status) => {
        setIsOpenInfoWindow(_status)
    }

    const handleUsers = (_users = 0, _activeUsers = 0) => {
        setFirmUsers([]);
        let arrayUsers = [];
        for (let i = 1; i <= _users; i++) {
            let user = {
                id: i,
                name: "",
                photo: "",
                active: i > _activeUsers ? 0 : 1
            }
            arrayUsers.push(user);
        }
        setFirmUsers(arrayUsers);
    }

    return (
        <div id="map">
            <ResetButton
                setCenter={setCenter}
            />

            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
                <GoogleMap
                    mapContainerStyle={{ width: "100%", height: 'calc(100vh - 230px)' }}
                    center={center}
                    zoom={context.zoom}
                    onIdle={() => context.funcHandleSetMapZoom()}
                    options={{
                        styles: mapStyle,
                        streetViewControl: false,
                        mapTypeControl: false,
                        gestureHandling: 'greedy',
                        zoomControl: false,
                    }}>

                    {
                        context.firms.map((firm, index) => (
                            <Marker
                                key={index}
                                position={{ lat: parseFloat(firm.lat), lng: parseFloat(firm.long) }}
                                icon={`./assets/img/map/${firm.color}.svg`}
                                onMouseDown={() => { setActiveMarker(firm); handleUsers(firm.users, firm.ausers); toggleInfoWindow(true) }}
                                onMouseUp={() => { setActiveMarker({}); toggleInfoWindow(false) }}
                            />
                        ))
                    }

                    {
                        isOpenInfoWindow &&
                        (
                            <InfoWindow
                                style={{ backgroundColor: `${firmColors[activeMarker.color]}` }}
                                position={{
                                    lat: parseFloat(activeMarker.lat),
                                    lng: parseFloat(activeMarker.long)
                                }}
                                onCloseClick={() => toggleInfoWindow(false)}
                            >
                                <div>
                                    <div>
                                        <img className="map-info-window-img" src={`https://demo.frigian.net/assets/img/logos/${activeMarker.logo}`} alt="" />
                                    </div>
                                    <div>
                                        <span className="font-weight-bold font-size-15">{activeMarker.name}</span>
                                    </div>
                                    <br />
                                    <div>
                                        <span className="font-weight-bold font-size-13">[ {activeMarker.ausers} / {activeMarker.users} ]</span>&emsp;
                                        <span>
                                            {
                                                firmUsers.map((user, i) => (
                                                    <FaUser key={i} className="font-size-13" style={{ color: user.active === 0 ? `${firmColors[0]}` : `${firmColors[1]}` }} />
                                                ))
                                            }
                                        </span>
                                    </div>
                                </div>
                            </InfoWindow>
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default memo(Map)