import React, { Component } from 'react';

class Add extends Component {
    state = {
        inputValue: '',
        list: [
            { id: 1, content: '안녕하세요' },
            { id: 2, content: '새로운 추가 기능'  },
            { id: 3, content: '더하기를 해보세요!'  },
        ],
        nextId: 4
    }

    handleChange = e => {
        this.setState({ inputValue: e.target.value })
    }

    handleBtnClick = () => {
        if (!this.state.inputValue) return;
        const newContent = { id: this.state.nextId, content: this.state.inputValue };
        this.setState({ 
            inputValue: '', 
            nextId: this.state.nextId + 1, 
            list: [ ...this.state.list, newContent ] 
        })
    }

    handleRemoveBtnClick = (id) => {
        const newList = this.state.list.filter(elem => elem.id !== id);
        this.setState({ list: newList })
    }

    render() {
        const { inputValue, list } = this.state;
        const itemList = list.map(elem => {
            return <div style={{ display: 'flex' }} key={ elem.id }>
                    <li >[id: { elem.id }] { elem.content }</li>
                    <button onClick={ () => this.handleRemoveBtnClick(elem.id) }>x</button>
                </div>
        })
        return <div>
            <h1>추가하기</h1>
            <input name="add" type="text" value={ inputValue } onChange={ this.handleChange } />
            <button onClick={ this.handleBtnClick }>추가</button>
            <ul>
                { itemList }
            </ul>
        </div>
    }
}

export default Add;