import React from 'react';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import CompA from "../components/CompA";
import CompB from "../components/CompB";
import CompC from "../components/CompC";
import Login from "./login";
import NotFound from "../components/NotFound";
const routes = [
    {id: 1, path: '/compA', component: CompA},
    {id: 2, path: '/compB', component: CompB},
    {id: 3, path: '/compC/:num', component: CompC},
];
class HeaderNav extends React.Component {
    state = {auth: false};
    onLogin = () => {
        this.setState({auth: true});
        this.props.history.push({
            pathname: '/compA'
        })
    };
    render() {
        const routeList = routes.map((route) => {
            return <Route
                key={route.id}
                path={route.path} render={
                (props) => {
                    return this.state.auth ?
                        <route.component {...props}/> : <Redirect to='/'/>
                }
            }/>
        });
        return (
            <div>
                <Switch>
                    <Route path="/" exact render={(props) => {
                        return <Login {...props} onLogin={this.onLogin}/>
                    }}/>
                    {routeList}
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </div>
        )
    }
};
export default withRouter(HeaderNav);