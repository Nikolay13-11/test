import { BaseComponent } from '../components/base-component';
import { mainElem } from '../components/constants';
import { listenMain } from '../components/functions';
import '../assets/styles/main.scss';

export class Main extends BaseComponent {
    constructor() {
        super('div', ['mainField']);
        this.element.id = 'mainField';
        this.element.innerHTML = mainElem.join('');
    }

    render() {
        listenMain();
        return this.element;
    }
}
