import { BaseComponent } from "../components/base-component";
import { buttons, Car } from "../components/constants";
import "./buttons.scss";




export class Buttons extends BaseComponent {
    constructor () {
        super ('div', ['buttonsField']);
        this.element.innerHTML = buttons;
        
    }

    render():HTMLElement {
        return this.element;

    }
}