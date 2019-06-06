import * as React from "react";
import "./gallery.scss";
import GalleryItemModal from "./galleryItemModal";

export class Gallery extends React.Component<{ items: Array<JSX.Element> }, { currentGalleryItem?: JSX.Element }> {
    constructor(props: any) {
        super(props);
        this.galleryItemClick = this.galleryItemClick.bind(this);
        this.state = {};
    }

    render() {
        return (
            <div className="gallery">
                {this.props.items.map((item, index) => <div className="gallery-item-box" onClick={() => this.galleryItemClick(item)} key={index}>{item}</div>)}
            </div>
        );
    }

    galleryItemClick(galleryItem: JSX.Element) {
        this.setState({
            currentGalleryItem: galleryItem
        });
    }
}
