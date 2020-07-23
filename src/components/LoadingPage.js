import React, { Component } from 'react';
class LoadingPage extends Component {
    render() {
        return (
            <div>
                <div className="spinner-border" role="status" style={{ height: "100px", width: "100px" }}>
                </div><br/>
                <h3>Loading...</h3>
            </div>
        );
    }
}

export default LoadingPage;