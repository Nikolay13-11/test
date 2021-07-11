import { infoCards } from '../app/cards';

export const soundClick = (link:string | undefined):void => {
  const audio = new Audio(); // Создаём новый элемент Audio
  audio.src = `../${link}`; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
};

export const states = {
  stateGameMode: localStorage.getItem('gameMode'),
  numberCardsArray: 0,
};

export function RemoveButtons() {
  document.getElementById('StartBtn')?.classList.add('delete');
  document.getElementById('StartBtn')?.classList.remove('flex');
  document.getElementById('RepeatBtn')?.classList.add('delete');
}

export function closeBar():void {
  const sidebar = document.getElementById('sidebar');
  sidebar?.classList.add('remove');
  (document.getElementById('burgerMenu') as HTMLElement).classList.remove('active');
}

export function NotTouch() {
  const cardsCat = document.querySelectorAll('card');
  cardsCat.forEach((el) => el.classList.add('not_touch'));
}

export const StarsField = document.createElement('div');
StarsField.className = 'StarsField';
StarsField.id = 'StarsField';

export const createCardsFront = (index: number):string[] => Object.keys(infoCards[index]).map((el, k) => `
    <div class='card_container' id='card_container'>
        <div class='card' id='card'>
            <div class='card_front' id='cardFront'>
                <img class='imgMain' id='${infoCards[index][k].word}' src='../${infoCards[index][k].image}'
                alt=''  data-sound='../${infoCards[index][k].audioSrc}'>
                <div class='container' id='container'>
                    <p>${infoCards[index][k].word}</p>
                    <img class='arrowCard' src='../icons/arrows.svg' alt=''>
                </div> 
            </div>
            <div class='card_back' id='cardBack'>
            <img class='imgMainBack' id='testI' src='../${infoCards[index][k].image}' alt=''>
            <p class='imgMainBack' id='testP'>${infoCards[index][k].translation}</p>
            </div>
        </div>
    </div>
`);

export const createGameCards = (index: number): string[] => Object.keys(infoCards[index]).map((el, k) => `
        <div class='card' id='card'>
                      <img class='imgMainGame' id='${infoCards[index][k].word}'
                      src='../${infoCards[index][k].image}' alt=''>
        </div>
`);

function generateCards(id:number) {
  document.getElementById('RepeatBtn')?.classList.add('delete');
  document.location.replace('#/category');
  NotTouch();
  setTimeout(() => {
    if (localStorage.getItem('gameMode') === 'false') {
      (document.getElementById('categoryField') as HTMLElement).innerHTML = createCardsFront(id).join('\n');
      document.getElementById('StartBtn')?.classList.add('delete');
      document.getElementById('StartBtn')?.classList.remove('flex');
      (document.getElementById('categoryField') as HTMLDivElement).insertAdjacentElement('afterbegin', StarsField);
    } else if (localStorage.getItem('gameMode') === 'true') {
      document.getElementById('StartBtn')?.classList.remove('delete');
      document.getElementById('StartBtn')?.classList.add('flex');
      (document.getElementById('categoryField') as HTMLElement).innerHTML = createGameCards(id).join('\n');
      (document.getElementById('categoryField') as HTMLDivElement).insertAdjacentElement('afterbegin', StarsField);
    }
  }, 100);
}

export function t(event:Event):void {
  const id = Number((event.target as HTMLElement).parentElement?.dataset.cards);
  if ((event.target as HTMLElement).parentElement?.classList.contains('Action(setA)')) {
    generateCards(id);
    states.numberCardsArray = id;
    closeBar();
  }
  if ((event.target as HTMLElement).parentElement?.classList.contains('Action(setB)')) {
    generateCards(id);
    states.numberCardsArray = id;
    closeBar();
  }
  if ((event.target as HTMLElement).parentElement?.classList.contains('Animal(setA)')) {
    generateCards(id);
    states.numberCardsArray = id;
    closeBar();
  }
  if ((event.target as HTMLElement).parentElement?.classList.contains('Animal(setB)')) {
    generateCards(id);
    states.numberCardsArray = id;
    closeBar();
  }
  if ((event.target as HTMLElement).parentElement?.classList.contains('Clothes')) {
    generateCards(id);
    states.numberCardsArray = id;
    closeBar();
  }
  if ((event.target as HTMLElement).parentElement?.classList.contains('Emotions')) {
    generateCards(id);
    states.numberCardsArray = id;
    closeBar();
  }
  if ((event.target as HTMLElement).parentElement?.classList.contains('Food')) {
    generateCards(id);
    states.numberCardsArray = id;
    closeBar();
  }
  if ((event.target as HTMLElement).parentElement?.classList.contains('Ocean')) {
    generateCards(id);
    states.numberCardsArray = id;
    closeBar();
  }
}

export function renderSideBar(event:Event):void {
  if ((event.target as HTMLElement).classList.contains('Main')) {
    document.location.replace('#/');
    closeBar();
  }
  if ((event.target as HTMLElement).classList.contains('Action(setA)')) {
    closeBar();
    generateCards(Number((event.target as HTMLElement).dataset.num));
    states.numberCardsArray = Number((event.target as HTMLElement).dataset.num);
  }
  if ((event.target as HTMLElement).classList.contains('Action(setB)')) {
    closeBar();
    generateCards(Number((event.target as HTMLElement).dataset.num));
    states.numberCardsArray = Number((event.target as HTMLElement).dataset.num);
  }
  if ((event.target as HTMLElement).classList.contains('Animal(setA)')) {
    closeBar();
    generateCards(Number((event.target as HTMLElement).dataset.num));
    states.numberCardsArray = Number((event.target as HTMLElement).dataset.num);
  }
  if ((event.target as HTMLElement).classList.contains('Animal(setB)')) {
    closeBar();
    generateCards(Number((event.target as HTMLElement).dataset.num));
    states.numberCardsArray = Number((event.target as HTMLElement).dataset.num);
  }
  if ((event.target as HTMLElement).classList.contains('Clothes')) {
    closeBar();
    generateCards(Number((event.target as HTMLElement).dataset.num));
    states.numberCardsArray = Number((event.target as HTMLElement).dataset.num);
  }
  if ((event.target as HTMLElement).classList.contains('Emotions')) {
    closeBar();
    generateCards(Number((event.target as HTMLElement).dataset.num));
    states.numberCardsArray = Number((event.target as HTMLElement).dataset.num);
  }
  if ((event.target as HTMLElement).classList.contains('Food')) {
    closeBar();
    generateCards(Number((event.target as HTMLElement).dataset.num));
    states.numberCardsArray = Number((event.target as HTMLElement).dataset.num);
  }
  if ((event.target as HTMLElement).classList.contains('Ocean')) {
    closeBar();
    generateCards(Number((event.target as HTMLElement).dataset.num));
    states.numberCardsArray = Number((event.target as HTMLElement).dataset.num);
  }
  NotTouch();
  RemoveButtons();
}

// header

export const headerElem = `    
<div class='burgerMenu' id='burgerMenu'>
    <span class='bar'></span>
    <span class='bar'></span>
    <span class='bar'></span>
</div>
<input type='checkbox' id='toggleBtn' class='toggleBtn' value='on'>

`;

// Main

const nameGroups = ['Action (set A)', 'Action (set B)', 'Animal (set A)',
  'Animal (set B)', 'Clothes', 'Emotions', 'Food', 'Ocean'];

// let b = infoCards[0].sort(() => Math.random() - 0.5)

export const mainElem = nameGroups.map((type) => `
<div class='groupCard ${type.replace(/\s/g, '')}' data-cards='${nameGroups.indexOf(type)}'>
    <img class='imgMain' src='../groupImage/${type}.jpg' alt=''>
<p>${type}</p>
</div>
`);

// Category

export const StartBtn = document.createElement('div');
StartBtn.className = 'StartBtn delete';
StartBtn.id = 'StartBtn';
StartBtn.append('Start');

export const RepeatBtn = document.createElement('div');
RepeatBtn.className = 'RepeatBtn delete';
RepeatBtn.id = 'RepeatBtn';

export const finishWin = document.createElement('div');
finishWin.className = 'winGame ';
finishWin.id = 'winGame';
export const finishLose = document.createElement('div');
finishLose.className = 'loseGame ';
finishLose.id = 'loseGame';

// export const Star = document.createElement('div');
// Star.className = "star";
export const StarCorrect = "<div class='star_correct' id='star'></div>";
export const StarWrong = "<div class='star_wrong' id='star'></div>";

// Sidebar

const Categorylist = nameGroups.map((type, k) => `
  <li class='bar_item ${type.replace(/\s/g, '')}' data-num='${k}'>${type}</li>
`);

export const SideBarElem = `
<ul>
<li class='Main bar_item'>Main Page</li>
${Categorylist.join('')}
<li class='Statistic bar_item'>Statistic</li>
</ul>
`;

// Statistic

const ScoreButtons = `
<div class='btn_score_container'>
    <button class='repeat' id='repeat'>Repeat difficult words</button>
    <button class='reset' id='reset'>Reset</button>
</div>
`;

let RowsTable = '';

const GetCorrect = (picture: any) => {
  if (!(localStorage.getItem(`${picture.image.split('/')[1].slice(0, -4)}correct`))) {
    return 0;
  }
  return localStorage.getItem(`${picture.image.split('/')[1].slice(0, -4)}correct`);
};

const GetWrong = (picture: any) => {
  if (!(localStorage.getItem(`${picture.image.split('/')[1].slice(0, -4)}wrong`))) {
    return 0;
  }
  return localStorage.getItem(`${picture.image.split('/')[1].slice(0, -4)}wrong`);
};

const GetClick = (picture: any) => {
  if (!(localStorage.getItem(`${picture.image.split('/')[1].slice(0, -4)}click`))) {
    return 0;
  }
  return localStorage.getItem(`${picture.image.split('/')[1].slice(0, -4)}click`);
};

const GetPercent = (picture: any) => {
  if (!(localStorage.getItem(`${picture.image.split('/')[1].slice(0, -4)}wrong`))) {
    return 0;
  }
  if (!(localStorage.getItem(`${picture.image.split('/')[1].slice(0, -4)}wrong`))
  && !(localStorage.getItem(`${picture.image.split('/')[1].slice(0, -4)}correct`))) {
    return 0;
  } {
    const correct = Number(localStorage.getItem(`${picture.image.split('/')[1].slice(0, -4)}correct`));
    const wrong = Number(localStorage.getItem(`${picture.image.split('/')[1].slice(0, -4)}wrong`));
    const max = 100;
    const result = (max / (correct + wrong)) * wrong;
    return result.toFixed(1);
  }
};

export const Row = ():void => infoCards.forEach((item, index) => {
  const y = item.map((i) => `
  <tr class='cat${index}'> 
    <th>${i.word}</th>
    <th>${i.translation}</th>
    <th>${nameGroups[index]}</th>
    <th>${GetClick(i)}</th>
    <th>${GetCorrect(i)}</th>
    <th>${GetWrong(i)}</th>
    <th>${GetPercent(i)}</th>
  </tr>
  `);
  RowsTable += y;
});

export const ClearRowsTable = ():void => {
  RowsTable = '';
};

// console.log(RowsData.join(''))

// for (let i = 0; i < 6; i++) {
//   infoCards.map((it, id) => {
//     console.log(it[i])
//   })
// }

// infoCards.map((it, id, a) => {
//   console.log(a[id][3].word)
// })

export const Table = ():string => `
  ${ScoreButtons}
  <table>
  <thead>
      <tr>
          <th>Word</th>
          <th>Translation</th>
          <th>Category</th>
          <th>Clicks</th>
          <th>Correct</th>
          <th>Wrong</th>
          <th>% errors</th>
      </tr>
  </thead>
  <tbody>
      ${RowsTable.split(',').join('')}
  </tbody>
  `;
