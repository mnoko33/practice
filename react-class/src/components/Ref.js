/* 
    jsx에서 dom에 직접 id=""로 붙이지 않는 이유는 
    해당 컴포넌트가 여러번 사용될 경우 unique값인 id가 중복되는 상황이 발생하기 때문이다.
    이를 방지하면서 id를 사용해야할 때 ref를 사용한다.
*/

import React, { Component } from 'react';

class Ref extends Component {
    state = {
        password: '0427',
        userInput: '',
        isClicked: false,
        isValidate: false,
    }

    handleChange = e => {
        this.setState({ userInput: e.target.value }, () => {
            if (this.state.userInput.length < 4) {
                this.setState({
                    isClicked: false,
                    isValidate: false,
                })
            }
        })
    }

    handleClick = () => {
        this.setState({ 
            isClicked: true,
            isValidate: this.state.password === this.state.userInput
        }, () => {
            console.log(this.state)
        })
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') this.handleClick();
    }

    render() {
        const { userInput, isClicked, isValidate } = this.state;
        const style = {
            backgroundColor: !isClicked 
                                        ? 'white'
                                        : isValidate ? 'lightgreen' : 'lightcoral'
        };
        return <div>
            <h1>Ref</h1>
            <p>password: 0427</p>
            <input
                type="password"
                style={ style }
                value={ userInput }
                onChange={ this.handleChange }
                onKeyPress={ this.handleKeyPress }
            ></input>
            <button onClick={ this.handleClick }>확인</button>
        </div>
    }
}
export default Ref;