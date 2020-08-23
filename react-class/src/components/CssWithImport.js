import React, { Component } from 'react';
import '../stylesheets/CssWithImport.css';

class CssWithImport extends Component {
    render() {
        return <div className="body">
            <h1>CSS</h1>
            <div className="rect"></div>
        </div>
    }
}

export default CssWithImport;