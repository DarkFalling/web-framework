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
                <div className={this.getGalleryClassName()}>
                    {
                        this.props.items.map((item, index) => <div className="gallery-item-box" onDoubleClick={(event) => this.galleryItemDoubleClick(event, item)} onClick={() => this.galleryItemClick(item)} key={index}>{item}</div>)
                    }
                </div>
                <div className={this.getGalleryOneClassName()} onDoubleClick={(event) => this.galleryItemDoubleClick(event, this.state.currentGalleryItem)}>
                    {
                        this.state.currentGalleryItem
                    }
                </div>
            </div>

        );
    }

    galleryItemClick(galleryItem: JSX.Element) {
        return;
    }

    galleryItemDoubleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>, currentItem?: JSX.Element) {
        this.setState((preState) => {
            return {
                currentGalleryItem: currentItem,
                currentGalleryItemToggle: !preState.currentGalleryItemToggle
            }
        });
    }

    getGalleryClassName(): string {
        let className = "gallery-box";
        if (this.state.currentGalleryItemToggle) {
            className += " gallery-box--hide";
        }
        return className;
    }
    getGalleryOneClassName() {
        let className = "gallery-one";
        if (this.state.currentGalleryItemToggle) {
            className += " gallery-one--show";
        }
        return className;
    }

}
