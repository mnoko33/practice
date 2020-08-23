import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { title, img } = this.props;
        const style = { margin: '5px' }
        return <div style={ style }>
            <div className="title">{ title }</div>
            <img src={ img } alt={ title }></img>
        </div>
    }
}

export default Card;