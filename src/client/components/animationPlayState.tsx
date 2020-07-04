import * as React from "react";
import "./animationPlayState.scss";

export default function AnimationPlayState(props: any) {
    return (
        <div className="animation-play-state">
            <div className="block block--animation">
                <div className="running">running</div>
                <div className="paused">paused</div>
            </div>
        </div>);
}