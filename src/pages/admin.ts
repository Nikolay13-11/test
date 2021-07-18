import { BaseComponent } from '../components/base-component';
import { adminePageGroup } from '../components/constants';
import { listenAdmin } from '../components/functions';
import '../assets/styles/admin.scss';

export class Admin extends BaseComponent {
  constructor() {
    super('div', ['adminPage']);
    this.element.id = 'adminPage';
    this.element.innerHTML = adminePageGroup;
  }

  render():HTMLElement {
    listenAdmin();
    return this.element;
  }
}
