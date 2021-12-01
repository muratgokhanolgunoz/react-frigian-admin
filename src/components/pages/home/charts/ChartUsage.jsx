import React from "react";
import PropTypes from "prop-types";
import FusionCharts from "fusioncharts";
import Widgets from "fusioncharts/fusioncharts.widgets";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFusionCharts from "react-fusioncharts";

ReactFusionCharts.fcRoot(FusionCharts, Charts, Widgets, FusionTheme);

const ChartUsage = (props) => {
    const { caption, mainValue, averageValue, minLimit, maxLimit } = props;

    const dataSource = {
        chart: {
            caption: caption,
            subcaption: "",
            lowerlimit: minLimit,
            upperlimit: maxLimit,
            showvalue: "1",
            numbersuffix: " %",
            theme: "fusion",
        },
        colorrange: {
            color: [
                {
                    minvalue: "0",
                    maxvalue: "50",
                    code: "#62B58F",
                },
                {
                    minvalue: "50",
                    maxvalue: "75",
                    code: "#FFC533",
                },
                {
                    minvalue: "75",
                    maxvalue: "100",
                    code: "#F2726F",
                },
            ],
        },
        dials: {
            dial: [
                {
                    value: mainValue,
                    tooltext: "<b>" +  + "%</b> lesser that target",
                },
            ],
        },
        // trendpoints: {
        //     point: [
        //         {
        //             startvalue: averageValue,
        //             displayvalue: "Average",
        //             thickness: "5",
        //             color: "#000",
        //             usemarker: "1",
        //             markerbordercolor: "#000",
        //             markertooltext: "60",
        //         },
        //     ],
        // },
    };

    return (
        <ReactFusionCharts
            type="angulargauge"
            width="100%"
            height="250"
            dataFormat="JSON"
            dataSource={dataSource}
        />
    );
};

ChartUsage.defaultProps = {
    caption: "",
    mainValue: 0,
    averageValue: 0,
    minLimit: 0,
    maxLimit: 100,
};

ChartUsage.propTypes = {
    caption: PropTypes.string.isRequired,
    mainValue: PropTypes.number.isRequired,
    averageValue: PropTypes.number,
};

export default ChartUsage;
