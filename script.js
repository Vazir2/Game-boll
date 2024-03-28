const input = document.querySelector('.game__input');
const btn = document.querySelector('.game__btn');
const timeOut = document.querySelector('.game__time');
const gameBox = document.querySelector('.gameBox');

let score = 0;
let time = 0;
let interval = 0;

btn.addEventListener('click', (event) => {

  event.preventDefault();

  if (input.value > 4) {
    time = input.value;
    input.value = '';
    clearInterval(interval);
    score = 0;
    start();
    let result = document.querySelector('.result');

    if (result) {
      result.style.display = 'nune';
    }
  }

});

const start = () => {

  interval = setInterval(() => decrease(), 1000);
  craeteBoll();

}

const decrease = () => {
  if (time == 0) {
    end()
  }
  else {
    let currentTime = --time;
    if (currentTime < 10) {
      currentTime = '0' + currentTime
    }

    timeOut.innerHTML = '00:' + currentTime

  }
}

const end = () => {
  gameBox.innerHTML = `<h2 class="result">Вы набрали: ${score} очков</h2>`
}

const rand = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

const craeteBoll = () => {
  let ball = document.createElement('div');
  let size = rand(20, 100);

  let coor = gameBox.getBoundingClientRect();

  let x = rand(0, coor.width - size);
  let y = rand(0, coor.height - size);

  ball.classList.add('ball');

  ball.style.width = size + 'px';
  ball.style.height = size + 'px';
  ball.style.top = y + 'px';
  ball.style.left = x + 'px';
  ball.style.background = `rgb(${rand(0, 255)},${rand(0, 255)},${rand(0, 255)})`;

  gameBox.append(ball);
}
gameBox.addEventListener('click', (event) => {
  if (event.target.classList.contains('ball')) {
    score++;
    event.target.remove();
    craeteBoll()
  }
});