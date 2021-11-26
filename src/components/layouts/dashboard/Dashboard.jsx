import React from "react";
import PropTypes from "prop-types";

const Dashboard = ({ left, right }) => {
    return (
        <div id="dashboard">
            <section id="section-sidebar">{left}</section>
            <section id="section-main">{right}</section>
        </div>
    );
};

Dashboard.propTypes = {
    left: PropTypes.element.isRequired,
    right: PropTypes.element.isRequired,
};

export default Dashboard;
