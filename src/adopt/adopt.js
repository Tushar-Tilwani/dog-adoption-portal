import _ from "lodash";
import "../assets/app.css";
import "./adopt.css";
import { dogs } from "../assets/data/dogs.json";

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));

const dog = _.find(dogs, { id });

function component(dog) {
  let img = document.createElement("img");
  img.src = `.${dog.image}`;

  let h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode(dog.title));

  let p = document.createElement("p");
  p.appendChild(document.createTextNode(dog.description));

  let figcaption = document.createElement("figcaption");
  figcaption.appendChild(h2);
  figcaption.appendChild(p);

  let figure = document.createElement("figure");
  figure.appendChild(img);
  figure.appendChild(figcaption);

  figure.classList.add("card");

  return figure;
}

document.getElementById("main-content").appendChild(component(dog));
