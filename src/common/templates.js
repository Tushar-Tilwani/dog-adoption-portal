import { PAGE_CONFIGS } from "./constants";

export function getLazyImg(imgLink, defaultLink) {
  const img = document.createElement("img");
  img.classList.add("lazy");
  img.dataset.src = imgLink;
  img.src = defaultLink || `./${PAGE_CONFIGS.placeHolderImgLink}`;
  return img;
}
