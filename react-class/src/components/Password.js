import React, { Component } from 'react';

class Password extends Component {
    state = {
        password1: '',
        password2: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = () => {
        const msg = this.state.password1 === this.state.password2 
                                                        ? '비밀번호가 일치합니다.'
                                                        : '비밀번호가 일치하지 않습니다.'
        alert(msg);
        this.setState({ password1: '', password2: '' });
    }

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            if (this.state.password2 === '') {
                alert('비밀번호를 입력해주세요');
                return
            }
            this.handleClick()
        };
    }

    render() {
        const { password1, password2 } = this.state;
        return <div>
            <h1>비밀번호 검사기</h1>
            <input 
                name="password1" 
                type="text" 
                value={password1} 
                placeholder="비밀번호" 
                onChange={this.handleChange}
            />
            <input name="password2" 
                type="text" 
                value={password2} 
                placeholder="비밀번호 확인" 
                onChange={this.handleChange} 
                onKeyPress={this.handleKeyPress}
            />
            <button onClick={this.handleClick}>확인</button>
        </div>
    }
}

export default Password;