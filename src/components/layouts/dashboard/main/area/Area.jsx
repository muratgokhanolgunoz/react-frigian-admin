import React from "react";
import { Switch, Route } from "react-router";
import Home from "../../../../pages/home/Index";
import Firms from "../../../../pages/firm/Index";
import style from "./Area.module.scss";

const Area = (_) => {
    return (
        <div className={style.area}>
            <div className={style.areaLower}>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/companies">
                        <Firms />
                    </Route>
                    <Route path="/messages"></Route>
                    <Route path="/announcements"></Route>
                </Switch>
            </div>
        </div>
    );
};
export default Area;
