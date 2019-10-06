import React, { Component } from 'react';
import { Timer, ClockButton } from "../_components";
import { withRouter } from "react-router-dom";

class TimerPage extends Component {

    state = {
        start: false,
        hour: '',
        min: '',
        sec: '',
        counter: 0
    }

    goBack = () => {
        this.props.history.push('/');
    }

    startTimer = () => {
        this.setState({
            start: true,
            counter: !this.state.counter ? this.state.hour * 3600 + this.state.min * 60 + +this.state.sec : this.state.counter
        });
        this.interval = setInterval(() => {
            this.setState({ counter: this.state.counter-1 });
            if (!(this.state.counter+1)) {
                clearInterval(this.interval);
                this.setState({
                    start: false,
                    counter: 0
                });
            }
        }, 1000)
    }

    pauseTimer = () => {
        const {counter} = this.state;
        this.setState({
            start: false,
            counter: counter
        });
        clearInterval(this.interval);
    }

    reset = () => {
        this.setState({
            hour: '',
            min: '',
            sec: '',
            counter: 0
        });
    }

    initMode = () => {
        return <div style={style}>
            <input type="number" name="hour" min="00" max="23" value={this.state.hour} placeholder="00" onChange={this.changeHandler}/>:
            <input type="number" name="min" min="00" max="59" value={this.state.min} placeholder="00" onChange={this.changeHandler}/>:
            <input type="number" name="sec" min="00" max="59" value={this.state.sec} placeholder="00" onChange={this.changeHandler}/>
        </div>
    }

    changeHandler = event => {
        let {target:{value, name}} = event;
        this.setState({
            [name]: value
        });
    }

    renderBtn = () => {
        if (this.state.start) {
            return <>
                <ClockButton onClick={this.pauseTimer}>Pause</ClockButton>
            </>
        } else {
            return <>
                <ClockButton onClick={this.goBack}>Back</ClockButton>
                {this.state.counter ? <ClockButton onClick={this.reset}>Reset</ClockButton> : null}
                <ClockButton onClick={this.startTimer}>Start</ClockButton>
            </>
        }
    }

    render() {
        const {start,counter} = this.state;
        return <div className='clock-page' style={{flexDirection: 'column'}}>
            <div>
                {!start && !counter ? this.initMode() : <Timer counter={counter} />}
            </div>
            <div style={{ marginTop: 20, width: 350, justifyContent: 'space-around' }}>
                    {this.renderBtn()}
            </div>
        </div>
    }
}

const style = {
    color: '#FFF',
    fontSize: 60,
    fontWeight: 'bold',
    justifyContent: 'center'
};

withRouter(TimerPage);

export { TimerPage };