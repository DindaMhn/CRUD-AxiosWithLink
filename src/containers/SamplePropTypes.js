import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SamplePropTypes extends Component {
    render() {
        return (
            <div>
                MyName : {this.props.name || 'dinda'}
            </div>
        );
    }
}
SamplePropTypes.propType = {
    name: PropTypes.string
}

export default SamplePropTypes;