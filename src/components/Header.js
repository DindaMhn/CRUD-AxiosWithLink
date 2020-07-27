import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {

    render() {
        let showPage
        if(this.props.auth){
            showPage=( <><Link to={"/home"}><button className="nav-button">Home</button></Link>
            <Link to={"/artikel"}><button className="nav-button">Artikel</button></Link>
            <Link to={"/user"}><button className="nav-button">User</button></Link>
            <button className="nav-button" onClick={this.props.logout}>Logout</button></>)
        } 
        return (
                <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav">
                    {showPage}
                </ul>
            </nav>
        );
    }
}

export default Header;