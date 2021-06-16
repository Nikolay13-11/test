import { BaseComponent } from "../components/base-component";
import "../assets/styles/winners.scss";
import { winners } from "../components/constants";

export class Winners extends BaseComponent {
    constructor () {
        super('div', ['winnersPage']);
        this.element.innerHTML = winners;
    }

    render(): HTMLElement {
        return this.element;
    }
}