import * as React from "react";
import "./spinner.scss"

export default function Spinner(props: any) {
    return (
        <div className="spinner">
            <div className="block block--transition">1</div>
            <div className="block block--transition">2</div>
            <div className="block block--transition">3</div>
        </div>);
}