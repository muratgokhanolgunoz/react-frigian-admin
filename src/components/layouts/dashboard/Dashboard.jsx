import React from 'react';

const Dashboard = props => {

    const { left, right } = props;

    return (
        <div id="dashboard">
            <section id="section-sidebar">
                {left}
            </section>
            <section id="section-main">
                {right}
            </section>
        </div>
    )
}
export default Dashboard;