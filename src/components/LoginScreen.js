import React, { Component } from 'react';
import swal from 'sweetalert';
import './Login.css'

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            errorMessageemail: "",
            errorMessagePassword: "",
            isValid: false,
            isLogin: false
        }
    }
    handleChangeInput = (event) => {
        let name = event.target.name
        this.setState({ ...this.state, [name]: event.target.value })
    }
    handleSubmit = () => {
        if (this.state.email !== "dinda@gmail.com" && this.state.password !== "dindarani1") {
            this.setState({
                errorMessageemail: "Invalid email",
                errorMessagePassword: "Invalid password"
            })
        } else if (!this.state.email.includes("@")) {
            this.setState({ errorMessageemail: "Email Must Be Contains @" })
        } else if (!this.state.email.includes(".")) {
            this.setState({ errorMessageemail: "Email Must Be Contains ." })
        } else if (this.state.email !== "dinda@gmail.com") {
            this.setState({ errorMessageemail: "Invalid email" })
        }
        else if (this.state.password !== "dindarani1") {
            this.setState({ errorMessagePassword: "Invalid password" })
        } else {
            this.setState({
                email: this.state.email,
                password: this.state.password,
                errorMessageemail: "",
                errorMessagePassword: "",
                isValid: true,
            })
        }
        
        if (this.state.isValid) {
            swal("", "Login Success", "success")
                .then((isOk) => {
                    if (isOk) {
                        this.setState({
                            isLogin: true
                        });
                            this.props.onLogin()
                    }
                });
        }
    }
    render() {

        return (
            <div className="card" >
                <div>
                    <h1>LOGIN</h1>
                    <div>
                        <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                            <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                        </svg>
                    </div>
                    <br /><br />
                    <div>
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        </svg>
                        <input
                            className="inputLogin"
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChangeInput}
                            placeholder="Email..."
                        />
                    </div>
                </div>
                <p>{this.state.errorMessageemail}</p>
                <div>
                    <div>
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-lock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z" />
                        </svg>
                        <input
                            className="inputLogin"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChangeInput}
                            placeholder="Password..."
                        /><br /><br />
                    </div>
                    <p>{this.state.errorMessagePassword}</p>
                </div>
                <div>
                    <button className="btn-grad" onClick={() => {
                        this.handleSubmit()
                    }}>Login</button>
                    <br /><br /><br />
                </div>

            </div>
        );
    }
}

export default LoginScreen;