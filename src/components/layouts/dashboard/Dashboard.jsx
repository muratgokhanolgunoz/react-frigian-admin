import React from "react";
import PropTypes from "prop-types";

const Dashboard = ({ left, right }) => {
    return (
        <div className="dashboard">
            <section className="section-sidebar">{left}</section>
            <section className="section-main">{right}</section>
        </div>
    );
};

Dashboard.propTypes = {
    left: PropTypes.element.isRequired,
    right: PropTypes.element.isRequired,
};

export default Dashboard;
