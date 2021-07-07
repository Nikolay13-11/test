import { BaseComponent } from '../components/base-component';
import { headerElem } from '../components/constants';
import './header.scss';

export class Header extends BaseComponent {
  constructor() {
    super('header', ['header']);
    this.element.innerHTML = headerElem;
  }

  render():HTMLElement {
    return this.element;
  }
}
