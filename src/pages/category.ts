import { BaseComponent } from '../components/base-component';
import { listenCategory } from '../components/functions';
import '../assets/styles/category.scss';

export class Category extends BaseComponent {
    constructor() {
        super('div', ['categoryField']);
        this.element.id = 'categoryField';
    }

    render() {
        listenCategory();
        return this.element;
    }
}
