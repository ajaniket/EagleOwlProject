import React, { Component } from 'react';
import SignIn from "../SignIn/SignIn"
import Tabs from "../../components/common/Tabs/Tabs"
import PrivateR from "../Router/PrivateR/index"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

class IndexRouter extends Component {
    render() {
        return (
            <div>
                <Router basename="/eagleowl">
                    <Switch>
                        <PrivateR path="/home" component={Tabs} />
                        <Route path="/" component={SignIn} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default IndexRouter;