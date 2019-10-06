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
