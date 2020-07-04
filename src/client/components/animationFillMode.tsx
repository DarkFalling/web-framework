import * as React from "react";
import "./animationFillMode.scss";

export default function AnimationFillMode(props: any) {
    return (
        <div className="animation-fill-mode">
            <div className="block block--animation-forwards">forwards</div>
            <div className="block block--animation-backwards">backwards</div>
            <div className="block block--animation-both">both</div>
        </div>);
}