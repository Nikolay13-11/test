import { AnimationCar, CreateGarage, DistanceBetwCarAndFlag, GetCars } from "./constants";
import { CreateCar, DeleteCar, Drive, GetCar, StartEngine, UpdateCar } from "./methods";

let SelectCar:any = null;





// export const CarCreate = () => {
//     const CreateClick = document.getElementById('create');
//     const Color = document.getElementById("colorCrt");
//     const Name = document.getElementById("nameCrt");
//     CreateClick?.addEventListener('click', (event: Event) => {
//         if (event.target instanceof Element) {
//             console.log((Color as HTMLInputElement).value)
//             console.log((Name as HTMLInputElement).value)
//           }
//     })
// }

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
    StopBtn.disabled = true;
}

export const DisableUpdate = () => {
    (document.getElementById('nameUpd') as HTMLInputElement).disabled = true;
    (document.getElementById('colorUpd') as HTMLInputElement).disabled = true;
    (document.getElementById('updateBtn') as HTMLInputElement).disabled = true;
}

export const updateGarage = async () => {

}

//  const { items: cars, count: carsCount} = await GetCars(1,1);


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
            GetCars();
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
            // const id = Number.parseInt((event.target as HTMLElement).id.split('engine-car-stop-')[1]);
            // StopDriving(id);
               
            
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
            GetCars();
            setTimeout(() => {
                (document.getElementById('garageWrapper') as HTMLElement).innerHTML = CreateGarage()
            }, 50); 
        }
    })
    document.getElementById('update')?.addEventListener('submit', async (event: any) => {
        event.preventDefault();
        UpdateCar(SelectCar.id,
            {
            name:(document.getElementById('nameUpd') as HTMLInputElement).value, 
            color:(document.getElementById('colorUpd') as HTMLInputElement).value
        });
        GetCars();
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


