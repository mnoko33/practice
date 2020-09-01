import React, { Component } from 'react';

class LifeCycle extends Component {
    state = {
        num: 0,
        stateColor: 'red',
    }

    constructor(props) {
        super(props);
        console.log('## constructor')
    }

    /* 
        getDerivedStateFromProps
        props를 state에 적용하는 함수
        nextProps == props obj
        prevState == state obj
        변경사항이 없을 경우 null을 return하면 된다
    */
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('## getDerivedStateFromProps');
    //     if (nextProps.propsColor !== prevState.stateColor) {
    //         return { stateColor: nextProps.propsColor }
    //     }
    //     return null;
    // }

    /* 
        componentDidMount
        component가 mount(화면에 렌더링)된 후 호출되는 함수
        js 라이브러리, 프레임워크의 함수를 호출하거나 이벤트 등록, 비동기 로직을 처리하면 된다
    */
    componentDidMount() {
        console.log('## componentDidMount');
    }

    /* 
        shouldComponentUpdate [ react v16.3 ]
        component에서 props 또는 state가 변경되었을 때,
        실제로 변화를 반영하여 렌더링을 할 것인지 결정하는 함수
        조건에 따라서 랜더링을 막아 컴포넌트를 최적화할 수 있다.
        return true => 랜더링 yes
        return false => 랜더링 no
    */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('## shouldComponentUpdate');
        console.log(nextProps, nextState);
        return nextState.num % 2 === 0;
    }

    /* 
        getSnapshotBeforeUpdate [ react v16.3 ]
        결과물이 랜더링되기 직전에 호출되는 함수로
        보통 업데이트 이전에 기억해야할 내용을 참고할 때 사용한다
        ex) 업데이트 이전의 스크롤 위치를 기억하고 이를 반영하는 경우
        여기서 return되는 snapshot은 componentDidUpdate의 세번째 인자인 snapshot에서 사용할 수 있다
    */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('## getSnapshotBeforeUpdate');
        return { scrollTop: '100px', scrollHeight: '200px' }
    }

    /*
        componentDidUpdate
        업데이트 결과물이 렌더링된 후에 실행되는 메소드
    */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('## componentDidUpdate')
        console.log('업데이트 이전의 props, state :', prevProps.propsColor, prevState.stateColor);
        if (snapshot) {
            console.log('snapshot: ', snapshot);
        }
    }

    /* 
        componentWillUnmount
        component가 DOM에서 제거될 때 실행되는 메소드
        보통 component를 제거하기 전에 이벤트, 타이머, 직접 만든 DOM등을 제거할 때 사용한다
    */
    componentWillUnmount() {
        console.log('## componentWillUnmount')
    }

    /* 
        componentDidCatch [ react v16 ]
        component 렌더링 도중 에러가 발생했을 때
        애플리케이션이 멈추지 않고 오류 UI를 보여주도록 사용한다
    */
    componentDidCatch(err, info) {
        console.log({ err, info })
    }

    handleClick = () => this.setState({ num: this.state.num + 1 })

    render() {
        const boxStyle = { 
            margin: '20px 20px 20px 0', 
            padding: '20px',
            border: '1px solid black'
            }
        return <div>
                <h1>LifeCycle</h1>

                <h3>getDerivedStateFromProps</h3>
                <div style={ boxStyle }>
                    <div>state: { this.state.stateColor }</div>
                    <div>props: { this.props.propsColor }</div>
                </div>

                <h3>shouldComponentUpdate</h3>
                <div style={ boxStyle }>
                    <p>홀수일 때는 안변하는 신기한 Box</p>
                    숫자: { this.state.num } <button onClick={ this.handleClick }>+</button>
                </div>
        </div>
    }
}

export default LifeCycle;