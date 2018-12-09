import _ from "lodash";
import "./assets/app.css";
import { dogs } from "./assets/data/dogs.json";

const PAGE_CONFIGS = {
  pageLength: 5,
  pageOffset: 1000
};

function component() {
  let cardNodes = dogs.map(dog => {
    let img = document.createElement("img");
    img.src = `.${dog.thumbnail}`;

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    imgContainer.appendChild(img);

    let h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode(dog.title));

    let p = document.createElement("p");
    p.appendChild(document.createTextNode(dog.description));

    let a = document.createElement("a");
    a.appendChild(document.createTextNode(`Adopt ${dog.title}`));
    a.classList.add("adopt-link");
    a.href = `./adopt.html?id=${dog.id}`;

    let figcaption = document.createElement("figcaption");
    figcaption.appendChild(h2);
    figcaption.appendChild(p);

    let figure = document.createElement("figure");
    figure.appendChild(imgContainer);
    figure.appendChild(figcaption);
    figure.appendChild(a);
    figure.classList.add("card");

    return figure;
  });

  return _.reduce(
    cardNodes,
    (parent, child) => {
      parent.appendChild(child);
      return parent;
    },
    document.createElement("main")
  );
}

function getPageTop() {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

function getPageHeight() {
  const body = document.body,
    html = document.documentElement;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
}

function infiteScroll(e) {
  console.log(getPageHeight() , getPageTop());
  if (getPageHeight() - getPageTop() < PAGE_CONFIGS.pageOffset) {
    console.log("Almost end");
  }
}

document.getElementById("main-content").appendChild(component());

window.onscroll = _.debounce(infiteScroll, 100);
