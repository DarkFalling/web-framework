import * as React from "react";
type ToggleState = { toggle: boolean };
type ToggleProps = {};
export class Toggle extends React.Component<ToggleProps, ToggleState> {
    constructor(props: ToggleProps) {
        super(props);
        this.state = {
            toggle: true
        };
    }
    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>{this.state.toggle ? "ON" : "OFF"}</button>
        );
    }
    handleClick(e: React.SyntheticEvent<MouseEvent>) {
        this.setState((preState, props) => {
            return {
                toggle: !preState.toggle
            }
        });
    }
}