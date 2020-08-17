import React, { Component } from 'react';

/* 
    환율을 계산하기 위한 커링 함수
    exchangeRate(환율)을 입력하면 type을 인자로 받는 함수를 return
    type (won, dollar)를 입력하면 value를 인자로 받는 함수를 return
*/
const roundNum = num => Math.round(num * 1000) / 1000;
const getExchange = (exchangeRate) => (type) => (value) => type === 'dollar' ? roundNum(exchangeRate * value) : roundNum((value / exchangeRate));
const EXCHANGE_RATE = 1000;
const convertWon2dollar = getExchange(EXCHANGE_RATE)('won');
const convertDollar2Won = getExchange(EXCHANGE_RATE)('dollar');

class LiftingState extends Component {
    state = {
        type: 'won',
        value: '0',
    }

    handleChange = e => {
        this.setState({
            type: e.target.name,
            value: e.target.value,
        })
    }

    render() {
        const { type, value } = this.state;
        const won = type === 'won' ? value : convertDollar2Won(value);
        const dollar = type === 'dollar' ? value : convertWon2dollar(value);
        return <div>
            <h1>환율</h1>
            <Dollar value={ dollar } handleChange={ this.handleChange } />
            <Won value={ won } handleChange={ this.handleChange } />
        </div>
    }
}

class Dollar extends Component {
    render() {
        const { value, handleChange } = this.props;
        return <div>
            달러 : <input value={ value } name="dollar" onChange={ handleChange } />
        </div>
    }
}


class Won extends Component {
    render() {
        const { value, handleChange } = this.props;
        return <div>
            원화 : <input value={ value } name="won" onChange={ handleChange } />
        </div>
    }
}

export default LiftingState;