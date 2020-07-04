import * as React from "react";
import "./transitionOrder.scss"

export default function TransitionOrder(props: any) {
    return (
        <div className="transition-order">
            <div className="block block--transition">1</div>
            <div className="block block--transition">2</div>
            <div className="block block--transition">3</div>
        </div>);
}