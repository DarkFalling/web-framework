import * as React from "react";

export interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

export class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <input type="text" />
                <div>
                    <input type="checkbox" />
                    <span>Only show products in stock</span>
                </div>
            </div>
        );
    }
}

export class ProductTable extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        );
    }
}

export class ProductCategoryRow extends React.Component {
    render() {
        return null;
    }
}

export class ProductRow extends React.Component {
    render() {
        return null;
    }
}

export class FilterableProductTable extends React.Component<{ products: Array<Product> }, {}> {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable />
            </div>
        );
    }
}