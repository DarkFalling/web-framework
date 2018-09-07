import * as React from "react";

export class WarningBanner extends React.Component<{ warning?: string }, {}> {
    render() {
        if (!this.props.warning) {
            return null;
        }
        const style = { display: "inline-block" };
        return (
            <span style={style} className="warning" >
                {this.props.warning}
            </span>
        );
    }
}