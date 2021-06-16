import { Buttons } from "../core/buttons";
import { Component } from "./app.model";
import "../assets/styles/mainStyle.scss"
import { Garage } from "../pages/garage";
import { Winners } from "../pages/winners";
import { DisableUpdate } from "../components/functions";
import { GetCars } from "../components/constants";

export class App implements Component {

    private readonly aplication: HTMLDivElement;

    private readonly buttons = new Buttons;

    private readonly garage = new Garage;

    private readonly winners = new Winners;

    constructor(private readonly rootElement: HTMLElement) {
        this.aplication = document.createElement('div');
        this.aplication.id = 'aplication';
        this.aplication.className = 'aplication';
    }

    generateStartPage ():HTMLElement | undefined {
        let page;
        if (window.location.hash === '#/garage') {
            page = this.aplication.appendChild(this.garage.element)
        }
        if (window.location.hash === '#/winners') {
            page =  this.aplication.appendChild(this.winners.element)
        }
        return page;
    }

    getHash ():void {
        window.addEventListener('hashchange', () => {
            if (window.location.hash.slice(1) === "/garage") {          
                this.aplication.appendChild(this.garage.element); 
                this.winners.element.remove(); 
            } 
            else if (window.location.hash.slice(1) === '/winners') {
                this.aplication.appendChild(this.winners.element); 
                this.garage.element.remove();  
            }
        })
    }

    render(): HTMLElement {
        GetCars();
        this.rootElement?.appendChild(this.aplication);
        this.aplication.appendChild(this.buttons.element);
        this.getHash();
        this.generateStartPage ();
        this.garage.render();
        this.winners.render();
        DisableUpdate ();
        return this.aplication;

    }
}