import _ from "lodash";
import { dogs } from "../../assets/data/dogs.json";
import "../../common/common.css";
import "./list.css";
import lazyLoader from "../../common/lazy-loader";
import { PAGE_CONFIGS } from "../../common/constants";
import { getLazyImg } from "../../common/templates";

const state = {
  currentPage: 0
};

/* Have used DOM APIs. In general, having a templating language
like EJS or HandleBar might be more maintable */
function getFigure(dog) {
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  imgContainer.appendChild(
    getLazyImg(`./${dog.thumbnail}`, `./${PAGE_CONFIGS.placeHolderImgLink}`)
  );

  let h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode(dog.title));

  let p = document.createElement("p");
  p.appendChild(document.createTextNode(dog.description));

  let a = document.createElement("a");
  a.appendChild(document.createTextNode(`Adopt ${dog.title}`));
  a.classList.add("adopt-link");
  a.href = `./views/describe.html?id=${dog.id}`;

  let figcaption = document.createElement("figcaption");
  figcaption.appendChild(h2);
  figcaption.appendChild(p);

  let figure = document.createElement("figure");
  figure.appendChild(imgContainer);
  figure.appendChild(figcaption);
  figure.appendChild(a);
  figure.classList.add("card");

  return figure;
}

function component(pageNum) {
  const start = pageNum * PAGE_CONFIGS.pageLength;
  const end = (pageNum + 1) * PAGE_CONFIGS.pageLength;

  let cardNodes = dogs.slice(start, end).map(dog => getFigure(dog));

  const fragment = _.reduce(
    cardNodes,
    (parent, child) => {
      parent.appendChild(child);
      return parent;
    },
    document.createDocumentFragment()
  );

  PAGE_CONFIGS.mainDiv.appendChild(fragment);

  // To make these changes non-blocking
  setTimeout(() => PAGE_CONFIGS.mainDiv.appendChild(fragment), 0);
  setTimeout(lazyLoader, 500);
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

function isMoreDataAvilable() {
  return state.currentPage * PAGE_CONFIGS.pageLength < dogs.length;
}

function infiteScroll(e) {
  if (
    getPageHeight() - getPageTop() < PAGE_CONFIGS.pageOffset &&
    isMoreDataAvilable()
  ) {
    component(++state.currentPage);
  }
}

function _init() {
  component(state.currentPage);
  window.onscroll = _.debounce(infiteScroll, PAGE_CONFIGS.debounceTime);
}

_init();
