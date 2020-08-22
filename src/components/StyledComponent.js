import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    margin-top: 30px;
    padding: 30px;
    border: 1px solid black;
`;

const Btn = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: 0px;
    margin-left: 30px;

    &:hover {
        cursor: pointer;
    }

    ${ props => props.darkMode && 
        css`
            background-color: black;
            color: white;
        ` 
    }
`;

class StyledComponent extends Component {
    render() {
        return (
            <Wrapper>
                <Btn darkMode={ true } onClick={ () => alert('dark mode btn') }>X</Btn>
                <Btn darkMode={ false } onClick={ () => alert('light mode btn') }>X</Btn>
            </Wrapper>
        )
    }
}

export default StyledComponent;