import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../../pages/home/Index';

const Area = () => {
    return (
        <div id="area">
            <div id="area-lower">
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/companies">

                    </Route>
                    <Route path="/messages">

                    </Route>
                    <Route path="/announcements">

                    </Route>
                </Switch>
            </div>
        </div>
    );
}
export default Area;