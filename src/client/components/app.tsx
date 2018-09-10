import * as React from "react";
import { CSSProperties } from "react";
import { Books, Book } from "./books";
import { Clock } from "./clock";
import { Toggle } from "./toggle";
import { LoginControl } from "./loginControl";
import { WarningBanner } from "./warningBanner";
import { EssayForm } from "./essayForm";
import { Product, FilterableProductTable } from "./filterableProductTable";
import "./app.scss";

export class App extends React.Component {
    galleryItems: Array<JSX.Element>;
    constructor(props: any) {
        super(props);
        const products: Array<Product> = [
            { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
            { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
            { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
            { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
            { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
            { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
        ];

        this.galleryItems = [
            <Clock />,
            <Toggle />,
            <LoginControl />,
            <WarningBanner warning="This is a warning." />,
            <Books books={new Array<Book>({ id: 1, title: "Linux vs Windows" }, { id: 2, title: "Apple vs Google" })} />,
            <EssayForm />,
            <FilterableProductTable products={products} />,
        ];
    }

    render() {
        return <Gallery items={this.galleryItems} />
    }
}

class Gallery extends React.Component<{ items: Array<JSX.Element> }> {
    render() {
        return (
            <div className="contaner-row-wrap">
                {this.props.items.map((item, index) => <GalleryItem key={index}>{item}</GalleryItem>)}
            </div>
        );
    }
}

class GalleryItem extends React.Component {
    render() {
        let s: CSSProperties = {
            border: "1px solid red",
        };

        return (
            <div style={s}>
                {this.props.children}
            </div>
        );
    }
}