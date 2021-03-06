import React, { Component } from 'react';
import { Clock, ClockButton } from "../_components";
import { withRouter } from "react-router-dom";

class ClockPage extends Component {

    state = {
        clockMode24: false
    }

    changeClockMode = () => {
        this.setState({ clockMode24: !this.state.clockMode24 });
    }

    gotoStopWatch = () => {
        this.props.history.push('/stopwatch');
    }

    gotoTimer = () => {
        this.props.history.push('/timer');
    }

    render() {
        return <div className="clock-page" style={{flexDirection: 'column'}}>
            <Clock clockMode={this.state.clockMode24} />
            <div style={{ marginTop: 20, width: 350, justifyContent: 'space-between' }}>
                <ClockButton onClick={this.changeClockMode}>24/12</ClockButton>
                <ClockButton onClick={this.gotoStopWatch}>StopWatch</ClockButton>
                <ClockButton onClick={this.gotoTimer}>Timer</ClockButton>
            </div>
        </div>
    }
}

const clockPageWithRouter = withRouter(ClockPage)

export { clockPageWithRouter as ClockPage }