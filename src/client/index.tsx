import * as React from "react";
import * as ReactDOM from "react-dom";

import "./reset.scss";
import "./index.scss";

import { Hello } from "./components/hello";
import { Clock } from "./components/clock";
import { Toggle } from "./components/toggle";
import { LoginControl } from "./components/loginControl";
import { WarningBanner } from "./components/warningBanner";
import { Books, Book } from "./components/books";
import { EssayForm } from "./components/essayForm";
import { FilterableProductTable, Product } from ".//components/filterableProductTable";
import { App } from "./app";

/* side effect node
var sideEffectNode = document.createElement('div');
sideEffectNode.setAttribute('style', 'background-color: lightblue; padding: 20px; margin: 10px;');
sideEffectNode.textContent = 'Side Effect';
document.body.appendChild(sideEffectNode);
*/
ReactDOM.render(
    <App />,
    document.getElementById("example")
);

if (module.hot) {
    module.hot.accept();
    /* side effect node
    module.hot.dispose(function () {
        if (sideEffectNode.parentNode)
            sideEffectNode.parentNode.removeChild(sideEffectNode);
    });
    */
}