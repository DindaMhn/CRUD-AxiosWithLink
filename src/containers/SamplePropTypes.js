import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

class SamplePropTypes extends Component {
   
    render() {
        let children = this.props.children
        return (
            <div>
                {/* MyName : {this.props.name || 'dinda'} */}
                MyName:{this.props.name}, and age:{this.props.age}
                {/* {children} */}
            </div>
        );
    }
}
//validasi type
SamplePropTypes.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
    // children:PropTypes.element.isRequired
}
// SamplePropTypes.defaultProps = {
//     name: 'dinda',
//     age:21
// }

export default SamplePropTypes;