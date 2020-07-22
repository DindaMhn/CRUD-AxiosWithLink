import React, { Component } from 'react';
import '../artikel/Artikel.css'

class HomeScreen extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         onHomeScreen: false,
    //         onArtikel: false,
    //         onLogout: false,
    //         onUser:false,
    //     }
    // }
    // HomePage = () => {
    //     this.setState({
    //         onHomeScreen: true,
    //         onArtikel: false,
    //         onLogout: false,
    //         onUser:false
    //     })
    // }
    // LoginPage = () => {
    //     this.setState({
    //         onHomeScreen: false,
    //         onArtikel: false,
    //         onLogout: true,
    //         onUser:false
    //     })
    //     console.log(this.state);
    // }
    // ArtikelPage = () => {
    //     this.setState({
    //         onHomeScreen: false,
    //         onArtikel: true,
    //         onLogout:false,
    //         onUser:false
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
        // if (this.state.onArtikel) {
        //     return (<Artikel />)
        // }
        // if (this.state.onLogout) {
        //     return (<LoginScreen/>)
        // }
        // if(this.state.onUser){
        //     return(<User/>)
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
                <h3><center>Welcome To Home Page</center></h3><br/>
                
            </div>
        );
    }
}

export default HomeScreen;