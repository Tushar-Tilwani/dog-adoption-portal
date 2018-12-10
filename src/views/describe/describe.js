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
  // let img = document.createElement("img");
  // img.classList.add("lazy");
  // img.dataset.src = `./${dog.thumbnail}`;
  // img.src = PAGE_CONFIGS.placeHolderImgLink;

  let h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode(dog.title));

  let p = document.createElement("p");
  p.appendChild(document.createTextNode(dog.description));

  let figcaption = document.createElement("figcaption");
  figcaption.appendChild(h2);
  figcaption.appendChild(p);

  let figure = document.createElement("figure");
  figure.appendChild(
    getLazyImg(`../${dog.image}`, `../${PAGE_CONFIGS.placeHolderImgLink}`)
  );
  figure.appendChild(figcaption);

  figure.classList.add("card");

  return figure;
}

function _init() {
  setTimeout(() => PAGE_CONFIGS.mainDiv.appendChild(component(dog)), 0);
  setTimeout(lazyLoader, 500);
}

_init();
