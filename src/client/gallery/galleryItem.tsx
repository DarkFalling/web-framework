import * as React from "react";
import { CSSProperties } from "react";
import "./galleryItem.scss";
import { type } from "os";

/*
export class GalleryItemBox extends React.Component<{ itemDesc?: string }> {
    render() {
        return (
            <div className="gallery_item_box">
                <div className="desc">{this.props.itemDesc}</div>
                {this.props.children}
            </div>
        );
    }
}
*/
type GalleryItemProps = { [key: string]: any, itemDesc: string };
export function withGalleryItem(GalleryItemContent: any) {
    return function GalleryItem(props: GalleryItemProps) {
        let { itemDesc } = props;
        return (
            <div className="gallery-item" >
                <div className="desc">{itemDesc}</div>
                <GalleryItemContent {...props} />
            </div >
        );
    }
}