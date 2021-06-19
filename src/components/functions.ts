import { AnimationCar, CarsWins, CreateGarage, DistanceBetwCarAndFlag, getRandomCars, page, updateGarage } from "./constants";
import { CreateCar, DeleteCar, Drive, GetCar, GetWinners, StartEngine, StopEngine, UpdateCar } from "./methods";

let SelectCar:any = null;



const StartDriving = async (id:number) => {

    const StartBtn = (document.getElementById('btnStart') as HTMLButtonElement);
    
    // StartBtn.disabled = true;

    const { velocity, distance} = await StartEngine(id);
    const Time = Math.round(distance / velocity);

    // // (document.getElementById('btnStop') as HTMLButtonElement).disabled = false;
    const Car:any = document.getElementById(`car-${id}`);
    const Flag = document.getElementById(`flag-${id}`);
    const Dist = Math.floor(DistanceBetwCarAndFlag(Car, Flag) + 40);

    AnimationCar (Car, Dist, Time);
    const a = AnimationCar (Car, Dist, Time);
    
    const { success } = await Drive (id);

    if (!success) window.cancelAnimationFrame(a.id);

    return {success, id, Time}
    
}

const StopDriving = async (id:number) => {
    const StopBtn = (document.getElementById('btnStop') as HTMLButtonElement);
    // StopBtn.disabled = true;

    await StopEngine(id);

    const car = document.getElementById(`car-${id}`);
    (car as HTMLElement).style.transform = `translateX(0)`;
}

export const DisableUpdate = () => {
    (document.getElementById('nameUpd') as HTMLInputElement).disabled = true;
    (document.getElementById('colorUpd') as HTMLInputElement).disabled = true;
    (document.getElementById('updateBtn') as HTMLInputElement).disabled = true;
}




let wins:any;
let winsCount:any;
export const updateWinners = async () => {
    const { items, count} = await GetWinners(1);
    wins = items;
    winsCount = count;
}




export const listen = () => {
    document.body.addEventListener('click', async (event:Event) => {
        if ((event.target as HTMLElement).classList.contains('selectBtn')) {
            SelectCar = await GetCar(Number.parseInt((event.target as HTMLElement).id.split('select-car-')[1], 10));
            (document.getElementById('nameUpd') as HTMLInputElement).value = SelectCar.name;
            (document.getElementById('colorUpd') as HTMLInputElement).value = SelectCar.color;
            (document.getElementById('nameUpd') as HTMLInputElement).disabled = false;
            (document.getElementById('colorUpd') as HTMLInputElement).disabled = false;
            (document.getElementById('updateBtn') as HTMLInputElement).disabled = false;         
        }
        if ((event.target as HTMLElement).classList.contains('removeBtn')) {
            const id = Number.parseInt((event.target as HTMLElement).id.split('remove-car-')[1], 10);
            await DeleteCar(id);
            updateGarage();
            setTimeout(() => {
                (document.getElementById('garageWrapper') as HTMLElement).innerHTML = CreateGarage()
            }, 50); 
        }
        if ((event.target as HTMLElement).classList.contains('btnStart')) {
            const id = Number.parseInt((event.target as HTMLElement).id.split('engine-car-start-')[1], 10);
            StartDriving(id);
            
        }
        if ((event.target as HTMLElement).classList.contains('btnStop')) {
            const id = Number.parseInt((event.target as HTMLElement).id.split('engine-car-stop-')[1], 10);
            StopDriving(id);
        }
        if ((event.target as HTMLElement).classList.contains('btnReset')) {
            document.querySelectorAll('.car').forEach(item => {
                const id = Number.parseInt((item as HTMLElement).id.split('car-')[1], 10);
                StopDriving(id);
            })
               
        }
        if ((event.target as HTMLElement).classList.contains('btnRace')) {
            document.querySelectorAll('.car').forEach(item => {
                const id = Number.parseInt((item as HTMLElement).id.split('car-')[1], 10);
                StartDriving(id);
            })
        }
        if ((event.target as HTMLElement).classList.contains('btnGener')) {
            event.preventDefault();
            const a = getRandomCars();
            a.map((car) =>( 
                CreateCar({
                name: car.name, 
                color:car.color
            })
            ))
            updateGarage();
            setTimeout(() => {
                (document.getElementById('garageWrapper') as HTMLElement).innerHTML = CreateGarage()
            }, 500); 
        }

        if ((event.target as HTMLElement).classList.contains('prevBtn')) {
            console.log(page.id)
            if (page.id > 1) {
                page.id--
                updateGarage();
                setTimeout(() => {
                    (document.getElementById('garageWrapper') as HTMLElement).innerHTML = CreateGarage()
                }, 500); 
            }
        }
        if ((event.target as HTMLElement).classList.contains('nextBtn')) {
            if (page.id < CarsWins.carsCount/7) {
                console.log(page.id)
                page.id++
                updateGarage();
                setTimeout(() => {
                    (document.getElementById('garageWrapper') as HTMLElement).innerHTML = CreateGarage()
                }, 500); 
            }
        }
    })
    document.getElementById('create')?.addEventListener('submit', async (event: any) => {
        event.preventDefault();
        if ((document.getElementById('nameCrt') as HTMLInputElement).value) {
            CreateCar({
                name:(document.getElementById('nameCrt') as HTMLInputElement).value, 
                color:(document.getElementById('colorCrt') as HTMLInputElement).value
            });
            (document.getElementById('nameCrt') as HTMLInputElement).value = '';
            updateGarage();
            setTimeout(() => {
                (document.getElementById('garageWrapper') as HTMLElement).innerHTML = CreateGarage()
            }, 500); 
        }
    })
    document.getElementById('update')?.addEventListener('submit', async (event: any) => {
        event.preventDefault();
        UpdateCar(SelectCar.id,
            {
            name:(document.getElementById('nameUpd') as HTMLInputElement).value, 
            color:(document.getElementById('colorUpd') as HTMLInputElement).value
        });
        updateGarage();
        setTimeout(() => {
            (document.getElementById('garageWrapper') as HTMLElement).innerHTML = CreateGarage()
        }, 50); 
        (document.getElementById('nameUpd') as HTMLInputElement).value = '';
        (document.getElementById('colorUpd') as HTMLInputElement).value = '#ffffff';
        (document.getElementById('nameUpd') as HTMLInputElement).disabled = true;
        (document.getElementById('colorUpd') as HTMLInputElement).disabled = true;
        (document.getElementById('updateBtn') as HTMLInputElement).disabled = true;
    })
}



