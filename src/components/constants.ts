// import { GetCars, tmy } from "./methods";
import { GarageBase, GetCarsT } from "./methods";

let tmy:any = null;
export const GetCars = () => {
  fetch(`${GarageBase}`)
  .then(data => data.json())
  .then(result => {tmy = result});
}



export const buttons = ` 
	<a href="#/garage" class="garageButton" id="garageButton">TO GARAGE</a>
	<a href="#/winners" class="winnersButton" id="winnersButton">TO WINNERS</a>
`;

// Garage

export const garageWrapper: HTMLDivElement = document.createElement('div');
garageWrapper.id = 'garageWrapper';


export const PageNum = 1;
export const GarageMenu = ` 
    <div class="car_parametrs">
        <div class="create_car">
            <form class="crate" id="create">
                <input class="nameCrt" id="nameCrt" type="text">
                <input class="colorCrt" id="colorCrt" type="color" value="#ffffff">
                <button class="createBtn" id="createBtn" type="submit" >Create</button>
            </form>
        </div>
        <div class="update_car">
            <form class="update" id="update">
                <input class="nameUpd" id="nameUpd" type="text">
                <input class="colorUpd" id="colorUpd" type="color" value="#ffffff">
                <button class="updateBtn" id="updateBtn" type="submit">Update</button>
            </form>
        </div>
        <div class="btnPlase">
            <button class="button btnRace" id="race">Race</button>
            <button class="button btnReset" id="reset">Reset</button>
            <button class="button btnGener" id="generate">Generate cars</button>    
        </div>
`;
export const Car = (color:string) => `<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="45px" height="45px" viewBox="0 0 99.116 99.116" style="fill: ${color}"
	 xml:space="preserve">
		<path d="M96.969,36.387h-1.896c-1.187,0-2.147,0.96-2.147,2.146v3.955l-6.774,0.174c-0.156,0.005-0.308-0.055-0.42-0.163
			c-0.11-0.108-0.174-0.257-0.174-0.413v-5.152c0-4.497-3.657-8.157-8.155-8.157c0,0-11.21-0.044-15.521-0.004
			c0-1.386-1.123-2.509-2.509-2.509h-10.72c-2.501,0-4.8,1.373-5.985,3.575l-5.809,10.791c0,0-26.671,2.726-28.033,4.068
			c-1.362,1.342-1.68,3.957-1.68,3.957s-1.28,0.348-2.146,1.566c-0.357,0.506-0.404,1.168-0.121,1.718
			c0.284,0.55,0.852,0.896,1.471,0.896v1.416L1.03,55.49c-0.658,0.152-1.508,1.209-0.7,2.707c1.198,2.225,6.179,2.242,6.179,2.242
			l2.44-7.646c0.443-1.39,1.7-2.359,3.156-2.438l8.884-0.56c1.312-0.069,2.553,0.6,3.217,1.734l7.229,12.384h29.47l8.917-12.807
			c0.642-0.925,1.686-1.485,2.81-1.51l9.121-0.192c1.47-0.032,2.803,0.856,3.341,2.224l2.838,7.221h6.652
			c1.187,0,2.146-0.961,2.146-2.146v-1.125h0.241c1.188,0,2.146-0.961,2.146-2.146V38.534
			C99.116,37.347,98.156,36.387,96.969,36.387z M44.675,40.996v-2.881c0-0.429-0.344-0.775-0.771-0.781l-1.75-0.022l3.036-6.007
			c0.785-1.553,2.377-2.531,4.117-2.531h8.704c0.345,0,0.625,0.28,0.625,0.625v11.67L44.675,40.996z M82.454,42.196
			c0,0.312-0.249,0.567-0.562,0.575l-19.327,0.497c-0.155,0.004-0.307-0.055-0.418-0.163c-0.11-0.108-0.174-0.258-0.174-0.412
			l-0.005-10.237c0-0.152,0.062-0.301,0.169-0.409c0.108-0.106,0.256-0.168,0.408-0.168H77.4c2.786,0,5.054,2.267,5.054,5.054
			V42.196z"/>
		<path d="M17.472,53.588c-5.319,0.052-9.59,4.402-9.54,9.723c0.004,0.413,0.042,0.812,0.097,1.211
			c0.642,4.744,4.719,8.377,9.628,8.331c5.044-0.046,9.136-3.96,9.508-8.899c0.021-0.271,0.036-0.547,0.033-0.824
			C27.149,57.809,22.793,53.539,17.472,53.588z M16.674,57.254l0.026,2.77c-0.303,0.081-0.584,0.204-0.85,0.365l-1.98-1.944
			C14.673,57.826,15.625,57.41,16.674,57.254z M12.704,59.637l1.986,1.945c-0.152,0.267-0.269,0.549-0.343,0.851l-2.768,0.028
			C11.713,61.408,12.105,60.449,12.704,59.637z M11.583,64.125l2.79-0.025c0.08,0.299,0.2,0.577,0.357,0.833l-1.954,1.987
			C12.165,66.123,11.742,65.17,11.583,64.125z M13.983,68.08l1.94-1.978c0.258,0.146,0.542,0.257,0.837,0.33l0.028,2.776
			C15.745,69.076,14.788,68.677,13.983,68.08z M23.537,62.347l-2.771,0.026c-0.079-0.302-0.202-0.58-0.357-0.846l1.946-1.982
			C22.974,60.345,23.383,61.297,23.537,62.347z M18.342,57.237c1.053,0.138,2.012,0.534,2.823,1.138l-1.942,1.981
			c-0.265-0.153-0.55-0.271-0.855-0.347L18.342,57.237z M18.455,69.193l-0.028-2.775c0.297-0.08,0.579-0.192,0.837-0.351
			l1.975,1.944C20.444,68.623,19.499,69.043,18.455,69.193z M22.424,66.834l-1.995-1.957c0.15-0.258,0.277-0.536,0.352-0.84
			l2.767-0.022C23.412,65.059,23.027,66.027,22.424,66.834z"/>
		<path d="M76.437,53.588c-5.318,0.052-9.59,4.402-9.54,9.723c0.005,0.413,0.042,0.812,0.097,1.211
			c0.643,4.744,4.72,8.377,9.629,8.331c5.044-0.046,9.135-3.96,9.507-8.899c0.022-0.271,0.037-0.547,0.034-0.824
			C86.114,57.809,81.759,53.539,76.437,53.588z M75.639,57.254l0.026,2.77c-0.303,0.081-0.585,0.204-0.851,0.365l-1.98-1.944
			C73.637,57.826,74.589,57.41,75.639,57.254z M71.669,59.637l1.986,1.945c-0.153,0.267-0.271,0.549-0.344,0.851l-2.768,0.028
			C70.677,61.408,71.07,60.449,71.669,59.637z M70.549,64.125l2.79-0.025c0.08,0.299,0.2,0.577,0.356,0.833l-1.952,1.987
			C71.13,66.123,70.707,65.17,70.549,64.125z M72.947,68.08l1.939-1.978c0.258,0.146,0.543,0.257,0.839,0.33l0.027,2.776
			C74.709,69.076,73.753,68.677,72.947,68.08z M82.501,62.347l-2.771,0.026c-0.077-0.302-0.2-0.58-0.355-0.846l1.947-1.982
			C81.938,60.345,82.348,61.297,82.501,62.347z M77.307,57.237c1.053,0.138,2.013,0.534,2.823,1.138l-1.942,1.981
			c-0.266-0.153-0.55-0.271-0.854-0.347L77.307,57.237z M77.419,69.193l-0.026-2.775c0.296-0.08,0.577-0.192,0.835-0.351
			l1.977,1.944C79.408,68.623,78.463,69.043,77.419,69.193z M81.389,66.834l-1.995-1.957c0.149-0.258,0.276-0.536,0.353-0.84
			l2.767-0.022C82.376,65.059,81.991,66.027,81.389,66.834z"/>
</svg>
`;
export const CarField: HTMLDivElement = document.createElement('div');

export const CreateCarBlock = (id: number, name: string, color: string) => `
<div class="carsField">
<div class="manageBtn">
	<button class="button selectBtn" id="select-car-${id}">Select</button>
	<button class="button removeBtn" id="remove-car-${id}">Remove</button>
	<p class="car-name">${name}</p>
</div>
<div class="road">
	<div class="controlBtns">
		<button class="carBtn btnStart" id="engine-car-start-${id}">A</button>
		<button class="carBtn btnStop" id="engine-car-stop-${id}">B</button>
	</div>
	<div class="car" id="car-${id}">
		${Car(color)}
	</div>
	<span class="flag" id="flag-${id}">&#127937</span>
</div>
`;

export const CreateGarage = () => `
<h1>Garage (${tmy.length})</h1>
<h2>Page (${1})</h2>
<ul class="garage">
	${Object.keys(tmy).map(item => `
	<li>${CreateCarBlock(tmy[item].id, tmy[item].name, tmy[item].color)}</li>`).join('')
}
</ul>
<div class="buttonsDown">
	<button class="btnPage prevBtn" id="prevBtn">Prev</button>
	<button class="btnPage nextBtn" id="nextBtn">Next</button>
</div>
`;


 
//	CarField.insertAdjacentHTML('afterbegin', CreateCar(3))

// Winners 

export const countWinners = 0;
export const winners = `
<h1 class="winners_text">Winners (${countWinners})</h1>
<h2>Page #${1}</h2>
<div class="winnerslist">
`;


// Animation 

const getCenterPosition = (el: any) => {
	const {top, left, width, height} = el.getBoundingClientRect();
	return {
		x: left + width / 2,
		y: top + height / 2
	}
}

export const DistanceBetwCarAndFlag = (a: any, b: any) => {
	const aPosition = getCenterPosition(a);
	const bPosition = getCenterPosition(b);
	return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
}



export function AnimationCar (car: any, distance: number, animationTime: number): any {
	let start:any = null;
	const state: any = {};

	function step(i:number) {
		if (!start) start = i;
		const time = i - start;
		const passed = Math.round(time * (distance / animationTime));

		car.style.transform = `translateX(${Math.min(passed, distance)}px)`;

		if (passed < distance) {
			state.id = window.requestAnimationFrame(step);
		}
	}
	state.id = window.requestAnimationFrame(step);
	
	return state;
}





