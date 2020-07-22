import React, { Component } from 'react';
import './User.css'

class UserList extends Component {
    render() {
        
        let { user, message } = this.props
        let allResult = user.map((data) =>
            <tr>
                <td>{data.id_user}</td>
                <td>{data.username}</td>
                <td>{data.notelp}</td>
                <td>{data.address}</td>
                <td>{data.gender}</td>
                <td><strong>{message}</strong></td>
            </tr>)
        return (
            
            <div className="container">
                <h3>Data</h3>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID User</th>
                                <th>Username</th>
                                <th>Notelp</th>
                                <th>Address</th>
                                <th>Gender</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allResult}
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default UserList;