import React, { Component } from 'react';
import Card from './Card';


class Iteration extends Component {
    state = {
        arr: [
            { title: '제목 1', img: 'https://picsum.photos/200/300' }, 
            { title: '제목 2', img: 'https://picsum.photos/200/300' }, 
            { title: '제목 3', img: 'https://picsum.photos/200/300' }, 
            { title: '제목 4', img: 'https://picsum.photos/200/300' }, 
            { title: '제목 5', img: 'https://picsum.photos/200/300' }, 
        ]
    }

    render() {
        const { arr } = this.state;
        const cards = arr.map((card, idx) => <Card key={ idx } title={ card.title } img={ card.img } />)
        return <div style={{ display: 'flex' }}>
            { cards }
        </div>
    }
}

export default Iteration;