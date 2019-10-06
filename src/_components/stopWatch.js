/*import React, { Component } from 'react';

class StopWatch extends Component {

    state = {
        count: 0
    }

    constructor(props) {
        super(props);
        this.interval = setInterval(() => {
            this.setState({ count: ++this.state.count })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    renderStopWatch() {
        let {count} = this.state;
        const hour = Math.floor(count/3600);
        const min = Math.floor((count%3600)/60);
        const sec = count % 60;
        return <div style={style}>
        <span>{hour.toLocaleString('en',{minimumIntegerDigits:2})}</span>:
        <span>{min.toLocaleString('en',{minimumIntegerDigits:2})}</span>:
        <span>{sec.toLocaleString('en',{minimumIntegerDigits:2})}</span>
        </div>
    }

    render() {
        return <>{this.renderStopWatch()}</>
    }
}*/

import React from 'react';

function StopWatch({ counter }) {
    const cSec = counter % 100;
    const counterSec = (counter - cSec) / 100;
    const sec = counterSec % 60;
    const min = ((counterSec - sec) / 60) % 60;
    const hour = (counterSec - min * 60 - sec) / 3600;
    return <div style={style}>
        <span>{hour.toLocaleString('en', { minimumIntegerDigits: 2 })}</span>
        :
        <span>{min.toLocaleString('en', { minimumIntegerDigits: 2 })}</span>
        :
        <span>{sec.toLocaleString('en', { minimumIntegerDigits: 2 })}</span>
        .
        <span style={{fontSize: 40}}>{cSec.toLocaleString('en', { minimumIntegerDigits: 2 })}</span>
    </div>;
}

const style = {
    color: '#FFF',
    fontSize: 60,
    fontWeight: 'bold',
    alignItems: 'baseline'
};

export { StopWatch };