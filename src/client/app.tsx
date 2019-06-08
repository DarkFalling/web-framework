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
import AnimationStep from "./components/animationStep";
import AnimationCubicBezier from "./components/animationCubicBezier";
import { withGalleryItem } from "./gallery/galleryItem";
import AnimationDirection from "./components/animationDirection";
import GalleryItemModal from "./gallery/galleryItemModal";
import AnimationFillMode from "./components/animationFillMode";
import AnimationPlayState from "./components/animationPlayState";
import Transition from "./components/transition";
import Spinner from "./components/spinner";
import RadiationAlert from "./components/radiation-alert";
import VibrateBell from "./components/VibrateBell";

export class App extends React.Component<{}, { currentGalleryItem?: JSX.Element }> {
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
        /*
        this.galleryItems = [
            <Clock />,
            <Toggle />,
            <LoginControl />,
            <WarningBanner warning="This is a warning." />,
            <Books books={new Array<Book>({ id: 1, title: "Linux vs Windows" }, { id: 2, title: "Apple vs Google" })} />,
            <EssayForm />,
            <FilterableProductTable products={products} />,
            <AnimationStep description="Animation with Steps" />,
        ];
        */
        const BooksGalleryItem = withGalleryItem(Books);
        const FilterableProductTableGalleryItem = withGalleryItem(FilterableProductTable);
        const WarningBannerGalleryItem = withGalleryItem(WarningBanner);
        this.galleryItems = [
            /*
            this.getGalleryItem(Clock),
            this.getGalleryItem(Toggle),
            this.getGalleryItem(LoginControl),
            <WarningBannerGalleryItem itemDesc="" warning="This is a warning." />,
            this.getGalleryItem(EssayForm),
            <BooksGalleryItem itemDesc="" books={new Array<Book>({ id: 1, title: "Linux vs Windows" }, { id: 2, title: "Apple vs Google" })} />,
            <FilterableProductTableGalleryItem itemDesc="" products={products} />,
            */
            this.getGalleryItem(AnimationStep, "Animation with steps"),
            this.getGalleryItem(AnimationCubicBezier, "Animation with Cubic Bezier"),
            this.getGalleryItem(AnimationDirection, "Animation with Direction - Alternate"),
            this.getGalleryItem(AnimationFillMode, "Animation with Fill Mode"),
            this.getGalleryItem(AnimationPlayState, "Animation with Play State"),
            this.getGalleryItem(Transition, "Transition - Order"),
            this.getGalleryItem(Spinner, "Spinner"),
            this.getGalleryItem(RadiationAlert, "Radiation Alert"),
            this.getGalleryItem(VibrateBell, "Vibrate Bell"),
        ];
    }

    getGalleryItem(galleryItemContent: React.ComponentType, description: string = ""): JSX.Element {
        let GalleryItem = withGalleryItem(galleryItemContent);
        return <GalleryItem itemDesc={description} />
    }



    render() {
        return (
            <div>
                <Gallery items={this.galleryItems} />
            </div>);
    }
}