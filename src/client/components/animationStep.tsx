import * as React from "react";
import "./animationStep.scss"

export default class AnimationStep extends React.Component {
    render() {
        return (
            <div className="animation-step">
                <div className="block block--animation"></div>
            </div>);
    }
}