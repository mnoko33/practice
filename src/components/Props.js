import React, { Component } from 'react';
import propTypes from 'prop-types';

class Props extends Component {
    render() {
        const { name, age, sex, job } = this.props;
        return <div style={{ backgroundColor: 'blue', color: 'white' }}>
            <p>이름 : { name }</p>
            <p>나이 : { age }</p>
            <p>성별 : { sex }</p>
            <p>직업 : { job }</p>
        </div>
    }
}

Props.propTypes = {
    name: propTypes.string.isRequired,
    age: propTypes.number.isRequired,
    sex: propTypes.string.isRequired,
    job: propTypes.string.isRequired,
}

Props.defaultProps = {
    job: 'FE developer'
}

export default Props;