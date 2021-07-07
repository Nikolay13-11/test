import { BaseComponent } from '../components/base-component';
import { listenScore } from '../components/functions';
import '../assets/styles/score.scss';

export class Score extends BaseComponent {
  constructor() {
    super('div', ['table_score']);
    this.element.id = 'table';
  }

  render():HTMLElement {
    listenScore();
    return this.element;
  }
}
