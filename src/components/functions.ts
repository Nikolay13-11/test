import { infoCards } from '../app/cards';
import {
  ClearRowsTable, closeBar, createCardsFront, createGameCards, finishLose,
  finishWin, Touch, RemoveButtons, renderSideBar, Row, soundClick, StarCorrect, StarsField, StarWrong,
  states, renderCards, Table, headerAdmin, adminePageGroup, adminPageWords,
} from './constants';

let state = false;
let starsBlock:string[] = [];

if (localStorage.getItem('gameMode') === 'true') {
  setTimeout(() => {
    (document.getElementById('toggleBtn') as HTMLInputElement).checked = true;
  }, 1000);
}

if (!(localStorage.getItem('gameMode'))) {
  localStorage.setItem('gameMode', 'false');
}

const RandomeSongNumber = [0, 1, 2, 3, 4, 5, 6, 7].sort(() => Math.random() - 0.5);
let numberOfSong = 0;

export function ClearStarsBlock():void {
  if (window.location.hash.slice(1) === '/category') {
    (document.getElementById('StarsField') as HTMLElement).innerHTML = '';
  }
  starsBlock = [];
  numberOfSong = 0;
}

function startGame():void {
  document.getElementById('StartBtn')?.classList.add('delete');
  document.getElementById('StartBtn')?.classList.remove('flex');
  document.getElementById('RepeatBtn')?.classList.remove('delete');
  soundClick(infoCards[states.numberCardsArray][RandomeSongNumber[numberOfSong]].audioSrc);
  state = true;
  numberOfSong = 0;
  Touch();
}

function ClosePop() {
  document.getElementById('popUp')?.classList.add('delete');
  document.body.classList.remove('notScroll');
  document.getElementById('cover')?.classList.add('delete');
}

let countError = 0;
const allCards = 7;

function deleteButtonsAndClearStars():void {
  ClearStarsBlock();
  document.getElementById('StartBtn')?.classList.add('delete');
  document.getElementById('RepeatBtn')?.classList.add('delete');
  document.getElementById('StartBtn')?.classList.remove('flex');
}

function finishGame():void {
  if (numberOfSong > allCards) {
    if (countError === 0) {
      document.querySelectorAll('.card')?.forEach((el) => el.classList.add('delete'));
      deleteButtonsAndClearStars();
      (document.getElementById('categoryField') as HTMLElement).appendChild(finishWin);
      soundClick('../audio/success.mp3');
      setTimeout(() => {
        numberOfSong = 0;
        document.location.replace('#/');
        (document.getElementById('categoryField') as HTMLElement).removeChild(finishWin);
      }, 2000);
    } else {
      document.querySelectorAll('.card')?.forEach((el) => el.classList.add('delete'));
      deleteButtonsAndClearStars();
      (document.getElementById('categoryField') as HTMLElement).appendChild(finishLose);
      soundClick('../audio/failure.mp3');
      setTimeout(() => {
        numberOfSong = 0;
        document.location.replace('#/');
        (document.getElementById('categoryField') as HTMLElement).removeChild(finishLose);
      }, 2000);
    }
  }
}

export function GameMode():void {
  const btnMode = document.getElementById('toggleBtn');
  btnMode?.addEventListener('change', (event:Event) => {
    if (window.location.hash.slice(1) === '/category') {
      if (localStorage.getItem('gameMode') === 'true') {
        (document.getElementById('categoryField') as HTMLElement)
          .innerHTML = createCardsFront(states.numberCardsArray).join('\n');
        document.getElementById('StartBtn')?.classList.add('delete');
        document.getElementById('StartBtn')?.classList.remove('flex');
        (document.getElementById('categoryField') as HTMLDivElement).insertAdjacentElement('afterbegin', StarsField);
        ClearStarsBlock();
        RemoveButtons();
      } else {
        (document.getElementById('categoryField') as HTMLElement)
          .innerHTML = createGameCards(states.numberCardsArray).join('\n');
        document.getElementById('StartBtn')?.classList.remove('delete');
        document.getElementById('StartBtn')?.classList.add('flex');
        (document.getElementById('categoryField') as HTMLDivElement).insertAdjacentElement('afterbegin', StarsField);
      }
    }
    if (!(event?.target as HTMLInputElement).checked) {
      localStorage.setItem('gameMode', 'false');
    } else {
      localStorage.setItem('gameMode', 'true');
    }
  });
}

export const listenMain = ():void => {
  document.body.addEventListener('click', (event:Event) => {
    renderCards(event);
    if ((event.target as HTMLElement).classList.contains('StartBtn')) {
      startGame();
    }
    if ((event.target as HTMLElement).classList.contains('RepeatBtn')) {
      soundClick(infoCards[states.numberCardsArray][RandomeSongNumber[numberOfSong]].audioSrc);
    }
    if ((event.target as HTMLElement).classList.contains('imgMainGame')
        && localStorage.getItem('gameMode') === 'true'
        && state === true) {
      const currPic = (event.target as HTMLElement).getAttribute('src')?.split('/')[2].slice(0, -4);
      const curSound = infoCards[states.numberCardsArray][RandomeSongNumber[numberOfSong]].audioSrc.slice(6, -4);
      if (currPic === curSound) {
        soundClick('../audio/correct.mp3');
        starsBlock.push(StarCorrect);
        (document.getElementById('StarsField') as HTMLElement).innerHTML = starsBlock.join('');
        (event.target as HTMLElement).classList.add('target');
        numberOfSong++;
        if (!(localStorage.getItem(`${currPic}correct`))) {
          localStorage.setItem(`${currPic}correct`, '1');
        } else {
          let cur = Number(localStorage.getItem(`${currPic}correct`));
          cur++;
          localStorage.setItem(`${currPic}correct`, `${String(cur)}`);
        }
        setTimeout(() => {
          soundClick(infoCards[states.numberCardsArray][RandomeSongNumber[numberOfSong]].audioSrc);
        }, 500);
        finishGame();
      } else if (currPic !== curSound) {
        soundClick('../audio/error.mp3');
        starsBlock.push(StarWrong);
        (document.getElementById('StarsField') as HTMLElement).innerHTML = starsBlock.join('');
        countError++;
        if (!(localStorage.getItem(`${currPic}wrong`))) {
          localStorage.setItem(`${currPic}wrong`, '1');
        } else {
          let cur = Number(localStorage.getItem(`${currPic}wrong`));
          cur++;
          localStorage.setItem(`${currPic}wrong`, `${String(cur)}`);
        }
      }
    }
    if ((event.target as HTMLElement).parentElement?.classList.contains('burgerMenu')
        || (event.target as HTMLElement).classList.contains('bar')
        || (event.target as HTMLElement).classList.contains('burgerMenu')
    ) {
      const sidebar = document.getElementById('sidebar');
      sidebar?.classList.toggle('remove');
      (document.getElementById('burgerMenu') as HTMLElement).classList.toggle('active');
    }
    if ((event.target as HTMLElement).classList.contains('cancelBtn')
        || (event.target as HTMLElement).classList.contains('cover')) {
      ClosePop();
    }
    if ((event.target as HTMLElement).classList.contains('logBtn')) {
      document.location.replace('#/admin');
      ClosePop();
      (document.getElementById('header') as HTMLElement).appendChild(headerAdmin);
    }
  });
};

export const listenCategory = ():void => {
  document.body.addEventListener('click', (event:Event):void => {
    if ((event.target as HTMLElement).parentElement?.parentElement?.classList.contains('card')) {
      soundClick((event.target as HTMLElement).dataset.sound);
      if (!(localStorage.getItem(`${(event.target as HTMLElement).id}click`))) {
        localStorage.setItem(`${(event.target as HTMLElement).id}click`, '1');
      } else {
        let cur = Number(localStorage.getItem(`${(event.target as HTMLElement).id}click`));
        cur++;
        localStorage.setItem(`${(event.target as HTMLElement).id}click`, `${String(cur)}`);
      }
    }
  });
  document.body.addEventListener('click', (event:Event):void => {
    if ((event.target as HTMLElement).classList.contains('arrowCard')) {
      (event.target as HTMLElement).parentElement?.parentElement?.parentElement?.classList.add('flip');
      (event.target as HTMLElement).addEventListener('mouseleave', () => {
        (event.target as HTMLElement).parentElement?.parentElement?.parentElement?.classList.remove('flip');
      });
    }
  });
};

export function navigateSideBar():void {
  const sideBar = document.querySelector('.sidebar');
  sideBar?.addEventListener('click', (event:Event) => {
    renderSideBar(event);
    ClearStarsBlock();
    if ((event.target as HTMLElement).classList.contains('Statistic')) {
      document.location.replace('#/score');
      ClearRowsTable();
      closeBar();
      Row();
      setTimeout(() => {
        (document.getElementById('table') as HTMLElement).innerHTML = Table();
      }, 500);
    }
    if ((event.target as HTMLElement).classList.contains('loginBtn')) {
      closeBar();
      document.getElementById('popUp')?.classList.remove('delete');
      document.body.classList.add('notScroll');
      document.getElementById('cover')?.classList.remove('delete');
    }
  });
}

export const listenScore = ():void => {
  document.body.addEventListener('click', (event:Event) => {
    if ((event.target as HTMLElement).classList.contains('reset')) {
      localStorage.clear();
      ClearRowsTable();
      Row();
      setTimeout(() => {
        (document.getElementById('table') as HTMLElement).innerHTML = Table();
      }, 500);
      if ((document.getElementById('toggleBtn') as HTMLInputElement).checked) {
        localStorage.setItem('gameMode', 'true');
      } else {
        localStorage.setItem('gameMode', 'false');
      }
    }
  });
};

// Admin

export const listenAdmin = ():void => {
  const adminPCol = document.getElementsByClassName('adminPage');
  document.body.addEventListener('click', (event:Event) => {
    if ((event.target as HTMLElement).classList.contains('catBtn')) {
      adminPCol[0].innerHTML = adminePageGroup;
    }
    if ((event.target as HTMLElement).classList.contains('wordsBtn')) {
      adminPCol[0].innerHTML = adminPageWords;
    }
    if ((event.target as HTMLElement).classList.contains('logOutBtn')) {
      document.location.replace('/');
    }
    if ((event.target as HTMLElement).classList.contains('add_word_btn')) {
      (event.target as HTMLElement).parentElement?.parentElement?.classList.add('active_cat');
    }
  });
};

// const a = GetWords();

// a.then((item )=> console.log(item));

// setTimeout(() => {
//   console.log(arr[0])
//   arr.forEach(i => {
//     console.log(typeof i)
//     Object.keys(i[0]).forEach(g => {
//       // console.log(g)
//     })
//   })
// }, 1000);
