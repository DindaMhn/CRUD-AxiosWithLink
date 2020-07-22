import React from 'react';
import { Link } from 'react-router-dom';

const CompB = (props) => {
    let {val} = props.location
    return (
        <div>
            component B
            <br />
            <Link to="/">Go to Comp A</Link><br/>
            {/* <p>{props.match.params.id}</p> */}
            <span>{`This Path ${props.location.pathname}, this state: ${props.location.state.val}`}</span>
        </div>
    )
}

export default CompB