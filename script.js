import { GUI } from "https://cdn.skypack.dev/dat.gui@0.7.9";

//#region FEATURES
const features = [
  {
    value: "105",
    measure: "lbs",
    label: "Net Weight",
  },
  {
    value: "26",
    measure: "mph",
    label: "Top Speed",
  },
  {
    value: "38",
    measure: "miles",
    label: "Max Range",
  },
  {
    value: "89",
    measure: "nm",
    label: "Max Torques",
  },
  {
    value: "22%",
    measure: "slope",
    label: "Hill Climbing",
  },
  {
    value: "2x",
    measure: "",
    label: "Hydralic Disc Brakes",
  },
];

const featuresContainer = document.querySelector(".features__container");

features.forEach((feature) => {
  featuresContainer.innerHTML += `
    <div class="features__card">
        <h1>${feature.value} <span>${feature.measure}</span></h1>
        <p>${feature.label}</p>
    </div>`;
});

//#endregion

//#region INFO
const infos = [
  "Lightweight aircraft grade aluminium frame",
  "Car grade lithium battery",
  "Self-balanced",
  "Plug n play",
  "Quick release adapter",
  "RFID key card",
];

const infoContainer = document.querySelector(".info__bottom-right-list");

infos.forEach((info) => {
  infoContainer.innerHTML += `
  <li>
    <img src="./assets/images/tick.png" alt="Tick" />
    <p>${info}</p>
  </li>
  `;
});

//#endregion

//#region ACCESSORIES
const accessories = [
  "Material : Aluminium alloy",
  "Color : Black",
  "Capacity : 45lbs",
  "Ease : Steady & adjustable",
];

const accessoriesContainer = document.querySelectorAll(".accessories__list");

// accessories.forEach(
//   (accessory, index) =>
//     (accessoriesContainer[index].innerHTML += `
//   <li>
//     <img src="./assets/images/tick.png" alt="Tick" />
//     ${accessory}
//   </li>
//   `)
// );
accessoriesContainer.forEach((item) =>
  accessories.forEach(
    (accessory) =>
      (item.innerHTML += `
      <li>
        <img src="./assets/images/tick.png" alt="Tick" />
        ${accessory}
      </li>
`)
  )
);

//#endregion

const CIRCLE_PATH = document.querySelector("#circlePath");
const TEXT_PATH = document.querySelector("#textPath");
const TEXT = document.querySelector("text");

const OPTIONS = {
  text: " •\u00A0 SEE •\u00A0 HOW •\u00A0 IT •\u00A0 WORKS",
  size: 15.5,
  radius: 40,
  showPath: true,
  spread: false,
  inside: false,
};

const VIEWBOX = 100;

const onUpdate = () => {
  TEXT.setAttribute("font-size", OPTIONS.size);
  const PATH = `
    M ${VIEWBOX * 0.5 - OPTIONS.radius}, ${VIEWBOX * 0.5}
    a ${OPTIONS.radius},${OPTIONS.radius} 0 1,${OPTIONS.inside ? 0 : 1} ${
    OPTIONS.radius * 2
  },0
    a ${OPTIONS.radius},${OPTIONS.radius} 0 1,${OPTIONS.inside ? 0 : 1} -${
    OPTIONS.radius * 2
  },0
  `;
  if (OPTIONS.spread)
    TEXT_PATH.setAttribute(
      "textLength",
      Math.floor(Math.PI * 2 * OPTIONS.radius)
    );
  else TEXT_PATH.removeAttribute("textLength");
  CIRCLE_PATH.setAttribute("d", PATH);
  TEXT_PATH.innerHTML = OPTIONS.text;
  CIRCLE_PATH.style.setProperty("--show", OPTIONS.showPath ? 1 : 0);
};

onUpdate();
