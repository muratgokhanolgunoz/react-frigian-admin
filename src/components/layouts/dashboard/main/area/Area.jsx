import React from "react";
import { Switch, Route } from "react-router";
import Home from "../../../../pages/home/Index";
import Firms from "../../../../pages/firm/Index";

const Area = () => {
    return (
        <div id="area">
            <div id="area-lower">
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
