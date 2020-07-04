import React = require("react");
import "./galleryItemModal.scss";

export default function GalleryItemModal(props: any) {
    return (
        <div className="gallery-item-modal">
            <div className="scale-box">
                {props.children}
            </div>
        </div>
    );
}