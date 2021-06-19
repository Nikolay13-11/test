import { BaseComponent } from "../components/base-component";
import "../assets/styles/garage.scss";
import { Car, CarField, CreateCarBlock, GarageMenu, CreateGarage, garageWrapper, updateGarage } from "../components/constants";
import { listen } from "../components/functions";


export class Garage extends BaseComponent {
    constructor () {
        super('div', ['garage']);
        this.element.id = 'garage';
        this.element.insertAdjacentHTML('afterbegin', GarageMenu);
        this.element.appendChild(garageWrapper);
        
        
        setTimeout(() => {
            garageWrapper.innerHTML = CreateGarage();
            
        }, 300);
    }
    
    render(): HTMLElement {
        listen ();
        updateGarage();
        return this.element;
    }
}


