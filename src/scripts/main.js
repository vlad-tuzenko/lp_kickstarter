'use strict';

/* Menu section */
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#mobile-menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

/* Presentation section */

const video = document.querySelector('.presentation__video');
const play = document.querySelector('.presentation__play');
const pause = document.querySelector('.presentation__pause');

play.addEventListener('click', () => {
  video.play();
  play.style.display = 'none';
  pause.style.display = 'block';
});

pause.addEventListener('click', () => {
  video.pause();
  play.style.display = 'block';
  pause.style.display = 'none';
});

/* Features section */
const next = document.querySelector('.features__nav-next');
const prev = document.querySelector('.features__nav-prev');
const cards = document.querySelector('.features__cards');
let cardsCount = 1;

const activeCard = document.querySelector('.features__nav-current');

next.addEventListener('click', () => {
  if (cardsCount >= 1 && cardsCount < 3) {
    prev.disabled = false;
    cardsCount++;
    cards.style.setProperty('--cards-count', cardsCount - 1);
    activeCard.innerHTML = '0' + (cardsCount);

    return cardsCount;
  } else {
    next.disabled = true;
  }
});

prev.addEventListener('click', () => {
  if (cardsCount > 1 && cardsCount <= 3) {
    next.disabled = false;
    cardsCount--;
    cards.style.setProperty('--cards-count', cardsCount - 1);
    activeCard.innerHTML = '0' + (cardsCount);

    return cardsCount;
  } else {
    prev.disabled = true;
  }
});
