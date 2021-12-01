/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { getHardwareUsage } from "../../../services/MapServices";
import { showToast } from "../../../core/functions";
import { Row, Col } from "react-bootstrap";
import style from "./Index.module.scss";
import Map from "./map/Map";
import ChartUsage from "./charts/ChartUsage";

const Home = () => {
    const [memoryUsage, setMemoryUsage] = useState(0);
    const [cpuUsage, setCpuUsage] = useState(0);
    const [cpuAverage, setCpuAverage] = useState(0);

    useEffect(() => {
        refreshHardwareUsage();
        setInterval(() => {
            refreshHardwareUsage();
        }, 3000);
    }, []);

    const refreshHardwareUsage = () => {
        try {
            getHardwareUsage().then((response) => {
                const { mem, cpu, avg } = response.data;
                setMemoryUsage(mem);
                setCpuUsage(cpu);
                setCpuAverage(avg);
            });
        } catch (error) {
            showToast("bottom-right", "API Error : " + error, "error");
            console.warn("API Error : " + error);
        }
    };

    return (
        <div className={style.home}>
            <Row>
                <Col lg="3">
                    <div className={style.chartLayout}>
                        <Row>
                            <Col lg="12" sm="6" className={style.column}>
                                <ChartUsage
                                    caption="RAM Usage"
                                    mainValue={memoryUsage}
                                />
                            </Col>
                            <Col lg="12" sm="6" className={style.column}>
                                <ChartUsage
                                    caption="CPU Usage"
                                    mainValue={cpuUsage}
                                    cpuAverageValue={cpuAverage}
                                />
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg="9">
                    <div className={style.mapLayout}>
                        <Row>
                            <Col>
                                <Map />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
