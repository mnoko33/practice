import React, { Component } from 'react';
import '../stylesheets/Scss.scss';

class Scss extends Component {
    render() {
        return <div>
            <h1>SCSS</h1>
            <div className="box">
                <div className="card"></div>
                <div className="card red"></div>
                <div className="card blue"></div>
                <div className="card orange"></div>
                <div className="card green"></div>
                <div className="card indigo"></div>
            </div>
        </div>
    }
}

export default Scss;
