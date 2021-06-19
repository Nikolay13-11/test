export const Serv = 'http://127.0.0.1:3000';

export const GarageBase = `${Serv}/garage`;
export const EngineBase = `${Serv}/engine`;
export const WinnersBase = `${Serv}/winners`;

export const GetCars = async (page: number, limit = 7) => {
  const response = await fetch(`${GarageBase}?_page=${page}&_limit=${limit}`);
  
  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
}


// export const { items:cars, count: carCount} = await GetCarsT(1, 7)




export const GetCar = async (id:number) => (await fetch(`${GarageBase}/${id}`)).json();

export const CreateCar = async (body:{ name: string, color: string }) => (await fetch (GarageBase, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
})).json();

export const DeleteCar = async (id:number) => (await fetch(`${GarageBase}/${id}`, {method: 'DELETE'})).json();

export const UpdateCar = async (id:number, body: { name: string, color: string }) => (await fetch (`${GarageBase}/${id}`, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
})).json();



export const StartEngine = async (id:number) => (await fetch(`${EngineBase}?id=${id}&status=started`)).json();

export const StopEngine = async (id:number) => (await fetch(`${EngineBase}?id=${id}&status=stopped`)).json();

export const Drive = async (id:number) => {
  const resp = await fetch(`${EngineBase}/?id=${id}&status=drive`).catch();
  return resp.status !== 200 ? { success: false} : {...(await resp.json())}
}

export const GetWinners = async (page: number, limit = 10) => {
  const response = await fetch(`${WinnersBase}?_page=${page}&_limit=${limit}`);

  
  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};




export const GetWinner = async (id:number) => (await fetch(`${WinnersBase}/${id}`)).json();

export const GetWinnersStatus = async (id:number) => (await fetch(`${WinnersBase}/${id}`)).status;

export const DeleteWinner = async (id:number) => (await fetch(`${WinnersBase}/${id}`, {method: 'DELETE'})).json();









// export function sendRequest(method:string, url: string, body = null) {
//   const headers = {
//     'Content-Type': 'application/json'
//   }
// return fetch(url).then(response => {
//   return response
// })
// }


// export function sendRequest(method:string, url: string, body = null) {
//   const headers = {
//     'Content-Type': 'application/json'
//   }
// return fetch(url).then(response => {
//   return response
// })
// }


// sendRequest('GET', GarageBase)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// sendRequest('GET', WinnersBase)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// sendRequest('GET', EngineBase)
// .then(data => console.log(data))
// .catch(err => console.log(err))