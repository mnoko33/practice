import React, { Component } from 'react';

class Style extends Component {
    render() {
        const style = {
            backgroundColor: 'red',
            color: 'white',
            width: '100%',
            height: '50px',
            lineHeight: '50px',
        }
        return <div style={ style }>스타일리쉬한 컴포넌트</div>
    }
}

export default Style;