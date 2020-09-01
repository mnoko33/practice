import React, { Component } from 'react';

class Event extends Component {
    state = {
        value: ''
    }

    handleChange = e => {
        this.setState({ value: e.target.value });
    }

    handleClick = () => this.setState({ value: '' });

    render() {
        const { value } = this.state;
        return <div>
            <h1>입력값 : { value }</h1>
            <input 
                type="text" 
                name="message" 
                placeholder="값을 입력하세요"
                value={ value }
                onChange = {this.handleChange}
            ></input>
            <button onClick={() => {
                alert(`"${value}"라고 입력하신걸 제출할게요!`)
                this.handleClick();
            }}>제출</button>
        </div>
    }
}

export default Event;