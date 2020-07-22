import React from 'react';
import { Link } from 'react-router-dom';

const CompC = (props) => {
    return (
        <div>
            component C
            <br />
            <Link to="/">Go to Comp A</Link>
            <p>{props.match.params.id}</p>
        </div>
    )
}

export default CompC