import * as React from "react";
import "./gallery.scss";
import GalleryItemModal from "./galleryItemModal";

export class Gallery extends React.Component<{ items: Array<JSX.Element> }, { currentGalleryItem?: JSX.Element, currentGalleryItemToggle?: boolean }> {
    constructor(props: any) {
        super(props);
        this.galleryItemClick = this.galleryItemClick.bind(this);
        this.galleryItemDoubleClick = this.galleryItemDoubleClick.bind(this);
        this.state = {};
    }

    render() {
        return (
            <div className="gallery">
                {
                    this.props.items.map((item, index) => <div className={this.getClassName(item)} onDoubleClick={(event) => this.galleryItemDoubleClick(event, item)} onClick={() => this.galleryItemClick(item)} key={index}>{item}</div>)
                }
            </div>
        );
    }

    galleryItemClick(galleryItem: JSX.Element) {
        return;
    }

    galleryItemDoubleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>, currentItem: JSX.Element) {
        this.setState((preState) => {
            return {
                currentGalleryItem: currentItem,
                currentGalleryItemToggle: !preState.currentGalleryItemToggle
            }
        });
    }

    getClassName(galleryItem: JSX.Element): string {
        let className = "gallery-item-box";
        if (this.state.currentGalleryItemToggle) {
            if (this.state.currentGalleryItem != galleryItem) {
                className += " gallery-item-box--hide";
            } else {
                className += " gallery-item-box--scale";
            }
        }
        return className;
    }
}
