import * as React from "react";

type ClockProps = {};
type ClockState = { now: Date };
export class Clock extends React.Component<ClockProps, ClockState> {
    timer: number = 0;
    constructor(props: ClockProps) {
        super(props);
        this.state = {
            now: new Date()
        };
    }

    componentDidMount() {
        this.timer = window.setInterval(() => {
            this.setState({
                now: new Date()
            });
        }, 1000);
    }
    componentWillUnmount() {
        window.clearInterval(this.timer);
    }
    render() {
        return (
            <span>{this.state.now.toLocaleString()}</span>
        );
    }
}