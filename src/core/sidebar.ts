import { BaseComponent } from '../components/base-component';
import { SideBarElem } from '../components/constants';
import { navigateSideBar } from '../components/functions';
import './sidebar.scss';

export class SideBar extends BaseComponent {
    constructor() {
        super('aside', ['sidebar', 'remove']);
        this.element.id = 'sidebar';
        this.element.innerHTML = SideBarElem;
    }

    render() {
        navigateSideBar();
        return this.element;
    }
}
