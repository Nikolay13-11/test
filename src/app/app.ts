import { Component } from './app.model';
import { Header } from '../core/header';
import { Main } from '../pages/main';
import { Category } from '../pages/category';
import { Score } from '../pages/score';
import { SideBar } from '../core/sidebar';
import { GameMode } from '../components/functions';
import { RepeatBtn, StartBtn } from '../components/constants';
import { Admin } from '../pages/admin';
import '../assets/styles/appStyle.scss';

function generateStartPage():void {
  const page = document.location.replace('#/');
  return page;
}

export class App implements Component {
  private readonly aplication: HTMLDivElement;

  private readonly header = new Header();

  private readonly main = new Main();

  private readonly category = new Category();

  private readonly score = new Score();

  private readonly bar = new SideBar();

  private readonly admin = new Admin();

  constructor(private readonly rootElement: HTMLElement) {
    this.aplication = document.createElement('div');
    this.aplication.id = 'aplication';
    this.aplication.className = 'aplication';
    this.aplication.appendChild(StartBtn);
    this.aplication.appendChild(RepeatBtn);
  }

  getHash():void {
    window.addEventListener('hashchange', () => {
      if (window.location.hash.slice(1) === '/') {
        this.aplication.appendChild(this.main.element);
        this.category.element.remove();
        this.score.element.remove();
        this.admin.element.remove();
      } else if (window.location.hash.slice(1) === '/category') {
        this.aplication.appendChild(this.category.element);
        this.main.element.remove();
        this.score.element.remove();
        this.admin.element.remove();
      } else if (window.location.hash.slice(1) === '/score') {
        this.aplication.appendChild(this.score.element);
        this.main.element.remove();
        this.category.element.remove();
        this.admin.element.remove();
      } else if (window.location.hash.slice(1) === '/admin') {
        this.aplication.appendChild(this.admin.element);
        this.main.element.remove();
        this.category.element.remove();
        this.score.element.remove();
      }
    });
  }

  render(): HTMLElement {
    this.rootElement?.appendChild(this.aplication);
    this.aplication.appendChild(this.bar.element);
    this.aplication.appendChild(this.header.element);
    this.aplication.appendChild(this.main.element);
    this.main.render();
    this.category.render();
    this.bar.render();
    this.score.render();
    this.getHash();
    generateStartPage();
    GameMode();
    this.admin.render();
    return this.aplication;
  }
}
