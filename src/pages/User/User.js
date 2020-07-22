import React, { Component } from 'react';
import {getUser} from '../../api/user/user';
import UserList from './UserList'
import './User.css'

class user extends Component {
    state = {
        id_user: "",
        username: "",
        notelp: "",
        address: "",
        gender: "",
        user:[],
        message:"",
        onHomeScreen: false,
        onUser: false,
        onArtikel:false,
        onLogout: false
    }
    componentDidMount() {
        console.log("component did mount");
        getUser().then((user) => {
            this.setState({ ...this.state, user: user.data.data, message: user.data.message })
        }).catch((error) => {
            alert(error)
        })
    }
    loadData = () => {
        getUser().then((user) => {
            this.setState({ ...this.state, user: this.state.user, message: this.state.message })
        }).catch((error) => {
            alert(error)
        })
    }
    handleChangeInput = (event) => {
        let name = event.target.name
        this.setState({
            ...this.state,
            [name]: event.target.value
        })
    }
    // HomePage = () => {
    //     this.setState({
    //         onHomeScreen: true,
    //         onArtikel:false,
    //         onUser: false,
    //         onLogout: false
    //     })
    // }
    // LoginPage = () => {
    //     this.setState({
    //         onHomeScreen: false,
    //         onArtikel:false,
    //         onUser: false,
    //         onLogout: true
    //     })
    // }
    // ArtikelPage = () => {
    //     this.setState({
    //         onHomeScreen: false,
    //         onArtikel:true,
    //         onUser: false,
    //         onLogout: false
    //     })
    // }
    // UserPage = () => {
    //     this.setState({
    //         onHomeScreen: false,
    //         onArtikel:false,
    //         onUser: true,
    //         onLogout: false
    //     })
    // }

    render() {
        // if (this.state.onHomeScreen) {
        //     return (<HomeScreen />)
        // }
        // if (this.state.onLogout) {
        //     return (<LoginScreen />)
        // }
        // if(this.state.onArtikel){
        //     return(<Artikel/>)
        // }
        return (
            <div>
                {/* <nav className="navbar navbar-expand-lg">
                    <ul className="navbar-nav">
                        <button className="nav-button" onClick={this.HomePage}>Home</button>
                        <button className="nav-button" onClick={this.ArtikelPage}>Artikel</button>
                        <button className="nav-button" onClick={this.UserPage}>User</button>
                        <button className="nav-button" onClick={this.LoginPage}>Logout</button>
                    </ul>
                </nav> */}
                <UserList message={this.state.message} user={this.state.user}/><br />
            </div>
        );
    }
}

export default user;