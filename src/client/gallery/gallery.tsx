import * as React from "react";
import { GalleryItem } from "./galleryItem";
import "./gallery.scss";

export class Gallery extends React.Component<{ items: Array<JSX.Element> }> {
    render() {
        return (
            <div className="gallery">
                {this.props.items.map((item, index) => <GalleryItem key={index}>{item}</GalleryItem>)}
            </div>
        );
    }
}
