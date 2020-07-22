import React, { Component } from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import HomeScreen from '../pages/Home/HomeScreen'
import Artikel from '../pages/artikel/Artikel'
import User from '../pages/User/User'
import NotFound from '../components/NotFound'
import LoginScreen from '../components/LoginScreen'
import Header from '../components/Header'

const routes = [
    { id: 1, path: '/home', component: HomeScreen },
    { id: 2, path: '/artikel', component: Artikel },
    { id: 3, path: '/user', component: User },
]
class Navigation extends Component {
    state = {
        auth: false
    }
    onLogin = ()=>{
        this.setState({
            auth :true
        })  
        this.props.history.push({
            pathname:"/home"
        })
    }
    onLogout = ()=>{
        this.setState({
            auth :false
        }) 
        this.props.history.push({
            pathname:"/"
        }) 
    }
    
    render() {
        const routeList = routes.map((route) => {
            return <Route
                key={route.id}
                path={route.path} render={
                    (props) => {
                        return this.state.auth ?
                            <route.component {...props} /> : <Redirect to='/' />
                    }
                } />
        });
        return (
            <div>
                <Header logout={this.onLogout} auth={this.state.auth}/>
                <Switch>
                    <Route path="/" exact 
                    render={(props) => {
                        return <LoginScreen {...props} onLogin={this.onLogin} />
                    }} />
                    {routeList}
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>

        );
    }
}

export default withRouter (Navigation);