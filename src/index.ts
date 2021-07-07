import { App } from './app/app';

window.onload = () => {
    if (!document.body) throw Error('App root element not found');
    new App(document.body).render();
};
