import React, { useContext } from "react";
import style from "./Index.module.scss";
import StatisticsRow from "./StatisticsRow";
import Context from "../../../../../context/Context";

const Index = (_) => {
    const context = useContext(Context);

    return (
        <div className={style.rowWrapper}>
            <StatisticsRow
                title="Total Firms"
                value={context.numberOfAllFirms}
            />
            <StatisticsRow
                title="Active Firms"
                value={context.numberOfActiveFirms}
            />
            <StatisticsRow
                title="Total Users"
                value={context.numberOfAllUsers}
            />
            <StatisticsRow
                title="Active Users"
                value={context.numberOfActiveUsers}
            />
        </div>
    );
};

export default Index;
