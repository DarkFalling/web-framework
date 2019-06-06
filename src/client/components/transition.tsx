import * as React from "react";
import "./transition.scss"

export default function Transition(props: any) {
    return (
        <div className="transition">
            <div className="block block--transition">1</div>
            <div className="block block--transition">2</div>
            <div className="block block--transition">3</div>
        </div>);
}