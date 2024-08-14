import { data } from "./emoji.js";

const cardsWrapperNode = document.querySelector(".cards__wrapper");

const inputNode = document.querySelector(".header__input");
// function карточки => отрисовка шаблона карточки

function createCard(arr) {
  const card = document.createElement("article"); // создаем тег article в div в документе html
  card.className = "card"; // присвоение класса
  card.innerHTML = `<p class="card__symbol">${arr.symbol}</p>
                    <h3 class="card__title"> ${arr.title}</h3>   
                    <p class="card__text">${uniqueCard(arr.keywords)}</p>`; // работаем по article
  return card;
} // // создание шаблона карточки

//forEach, function expression create card(элемент из forEach) push с помощью метода append (куда и что) и вызов функции в аргумент данные data}

function cardRender(data) { // - function render Карточек
  cardsWrapperNode.innerHTML = " ";
  data.forEach((element) => {
    const card = createCard(element); // - с помощью переменной card мы обращаемся к функции (createCard на 8 строчке к шаблону) в которой создали шаблон для карточек
    cardsWrapperNode.append(card); //  (куда добавляем?) в нашу cardsWrapperNode (добавляем что?) - значение card (отсылает к каждому element функции - symbol, title, keywords), которое мы определили выше
  });
}

// function оставить уникальные слова

function uniqueCard(str) {
  const arr = str.split(" ");
  const uniqueNum = [...new Set(arr)];
  return uniqueNum.join(" ");
}

// function по поиску эмодзи

function cardFind(event) {
  let result = event.target.value.toLocaleLowerCase().trim();
  let newData = data.filter((el) => el.title.toLocaleLowerCase().includes(result) || el.keywords.toLocaleLowerCase().includes(result) );
  cardRender(newData);
}

cardRender(data);
inputNode.addEventListener("input", cardFind);

// let x = "100"
// let result1 = data.filter((el) => el.title === x);
// console.log(result1);

// function cardFind (data){
//   data.forEach((element)) => {
//     const card = createCard(element);
//     inputNode.
//   }
// }

// function findEmoji (event) E
// // let result = event. target.value;
// I/ let resulti = renderCard(data, result);
// Il console.log(resulti);
// // let result2 = resulti. filter((element) => element == result);
// // return result2
// console. log(event.target.value);
// renderCard(data);
// inputNode.addEventListener("input", findEmoji);
