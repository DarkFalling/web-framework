import * as React from "react";
import { CSSProperties } from "react";
import { Books, Book } from "./components/books";
import { Clock } from "./components/clock";
import { Toggle } from "./components/toggle";
import { LoginControl } from "./components/loginControl";
import { WarningBanner } from "./components/warningBanner";
import { EssayForm } from "./components/essayForm";
import { Product, FilterableProductTable } from "./components/filterableProductTable";
import { Gallery } from "./gallery/gallery";
import { CentralizeBlock } from "./centralizeBlock";

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
        return <CentralizeBlock></CentralizeBlock>;
    }
}