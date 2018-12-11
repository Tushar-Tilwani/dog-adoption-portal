import _ from "lodash";
import "../../common/common.css";
import "./describe.css";
import { dogs } from "../../assets/data/dogs.json";
import lazyLoader from "../../common/lazy-loader";
import { PAGE_CONFIGS } from "../../common/constants";
import { getLazyImg } from "../../common/templates";

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));

const dog = _.find(dogs, { id });

function component(dog) {
  let h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode(dog.title));

  let p = document.createElement("p");
  p.appendChild(document.createTextNode(dog.description));

  let figcaption = document.createElement("figcaption");
  figcaption.appendChild(h2);
  figcaption.appendChild(p);

  let figure = document.createElement("figure");
  figure.appendChild(
    getLazyImg(
      `../${dog.image}`,
      `../${PAGE_CONFIGS.placeHolderImgLink}`,
      dog.title
    )
  );
  figure.appendChild(figcaption);

  figure.classList.add("card");

  return figure;
}

function backBtn() {
  let a = document.createElement("a");
  a.appendChild(document.createTextNode("<< Back"));
  a.href = `../index.html`;
  a.classList.add("back-btn");
  return a;
}

function _init() {
  setTimeout(() => {
    document.body.appendChild(backBtn());
    PAGE_CONFIGS.mainDiv.appendChild(component(dog));
  }, 0);
  setTimeout(lazyLoader, 500);
}

_init();
