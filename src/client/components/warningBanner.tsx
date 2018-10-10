import * as React from "react";
import "./warningBanner.scss";

export class WarningBanner extends React.Component<{ warning?: string }, {}> {
    render() {
        if (!this.props.warning) {
            return null;
        }
        return (
            <span className="warning-banner" >
                {this.props.warning}
            </span>
        );
    }
}