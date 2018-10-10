import * as React from "react";
import { CSSProperties } from "react";
import "./galleryItem.scss";

export class GalleryItem extends React.Component {
    render() {
        return (
            <div className="gallery-item">
                {this.props.children}
            </div>
        );
    }
}