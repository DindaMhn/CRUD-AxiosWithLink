import React from 'react';
import {Link} from 'react-router-dom'

const CompA = () =>{
    return(
        <div>
            component A
            <br/>
            {/* <Link to="/compB">Go to Comp B</Link>
            <br/>
            <Link to="/compC/1">Go to Comp C with id</Link> */}
            <Link to={{pathname:"/compB",state:{val:"this values from component A"}}}>To Component B</Link>
<Link to="/compC/1">To Component C</Link>
        </div>
    )
}

export default CompA