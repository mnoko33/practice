import React, { Component } from 'react';

class State extends Component {
    state = {
        cnt : 0,
        number: 1,
    }
    render() {
        const { cnt } = this.state
        return <div>
            <h1>cnt : { cnt }</h1>
            <button onClick={() => {
                this.setState(prevState => {
                    return {cnt: prevState.cnt + 1}
                })
                // this.setState({cnt: cnt + 1})
            }}>+</button>
        </div>
    }
}

export default State;