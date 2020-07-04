import * as React from "react";
import "./centralizeBlock.scss";
import { element } from "prop-types";

export class CentralizeBlock extends React.Component {
    componentDidMount() {
        /*
        setTimeout(() => {
            let ele = document.querySelector<HTMLLIElement>(".square.transition-transform-scale");
            console.log(ele);
            (ele as HTMLLIElement).style.transform = "scale(2, 2)";
        }, (2000));
        */
    }
    render() {
        return (
            <div>
                <div className="box">
                    <p className="box--desc">h <span className="code">margin: 0 auto</span></p>
                    <div className="box--content centralize_h_margin">Block Element</div>
                </div>
                <div className="box centralize_h_flex">
                    <p className="box--desc">h flex</p>
                    <div className="box--content">Block Element</div>
                </div>
                <div className="box">
                    <div className="table">
                        <p className="box--desc code">v display: table</p>
                        <div className="box--content table_cell">Block Element</div>
                    </div>
                </div>
                <div className="box centralize_v_flex">
                    <p className="box--desc">v flex</p>
                    <div className="box--content">Block Element</div>
                </div>
                <ul className="animation1">
                    <li>Apple</li>
                    <li>Apple</li>
                    <li>Apple</li>
                    <li>Apple</li>
                    <li>Apple</li>
                </ul>
                <ul className="animation2">
                    <li>Apple</li>
                    <li>Apple</li>
                    <li>Apple</li>
                    <li>Apple</li>
                    <li>Apple</li>
                </ul>
                <div>
                    <div className="square animation-color-radius"></div>
                    <div className="square transition-color-radius"></div>
                    <div className="square transition-transform-skew"></div>
                    <div className="square transition-transform-translate"></div>
                    <div className="square transition-transform-rotate"></div>
                    <div className="square transition-transform-scale"></div>
                </div>
            </div>
        );
    }
}