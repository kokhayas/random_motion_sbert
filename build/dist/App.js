import cosSimilarity from "../_snowpack/pkg/cos-similarity.js";
import React, {useState} from "../_snowpack/pkg/react.js";
import {useCopyToClipboard} from "../_snowpack/pkg/usehooks-ts.js";
import "./App.css.proxy.js";
import international from "./data/international.json.proxy.js";
import nationalVector from "./data/modifiedmotionNational.json.proxy.js";
import internationalVector from "./data/modifiedmotionInternational.json.proxy.js";
import national from "./data/national.json.proxy.js";
import pic from "./utdslogo.png.proxy.js";
let nationalHistory = new Array();
let internationalHistory = new Array();
let descending = new Array();
let ascending = new Array();
let internationalascending = new Array();
let internationaldescending = new Array();
let alls = new Array();
let allsDescending = new Array();
let allsA = new Array();
let allsAscending = new Array();
function App({}) {
  const [count, setCount] = useState(0);
  const [nationalMotion, setNationalMotion] = useState(0);
  const [internationalMotion, setInternationalMotion] = useState(0);
  const [value, copy] = useCopyToClipboard();
  const [showModal, setShowModal] = useState(false);
  const [showModalA, setShowModalA] = useState(false);
  const [ishowModal, setiShowModal] = useState(false);
  const [ishowModalAscending, setiShowModalAscending] = useState(false);
  let num = -1;
  function handleNationalClick() {
    console.log(nationalHistory);
    nationalHistory.push(nationalMotion);
    num = Math.floor(Math.random() * 486);
    setNationalMotion(num);
    console.log(num);
  }
  function handleInternationalClick() {
    internationalHistory.push(internationalMotion);
    num = Math.floor(Math.random() * 306);
    if (num === 12) {
      num = 13;
    }
    setInternationalMotion(num);
    console.log(num);
  }
  function handleNationalBackwardClick() {
    setNationalMotion(nationalHistory.pop());
    console.log(nationalMotion);
  }
  function handleInternationalBackwardClick() {
    setInternationalMotion(internationalHistory.pop());
    console.log(internationalMotion);
  }
  function calculate(number) {
    let vector = nationalVector[number]["vector"];
    let sentence = nationalVector[number]["sentence"];
    let similarity = 0;
    let similarities = {};
    for (let i = 0; i < 4599; i++) {
      similarity = cosSimilarity(vector, nationalVector[i]["vector"]);
      similarities[i] = similarity;
    }
    let arr = similarities;
    var keys = [];
    for (var key in arr)
      keys.push(key);
    function descendingCompare(a, b) {
      return arr[b] - arr[a];
    }
    function ascendingCompare(a, b) {
      return arr[a] - arr[b];
    }
    keys.sort(descendingCompare);
    console.log(keys);
    descending = [];
    for (let i = 0; i < 10; i++) {
      if (i !== 0) {
        descending.push("	");
      }
      console.log("descending");
      console.log(nationalVector[keys[i]]["sentence"]);
      descending.push(nationalVector[keys[i]]["sentence"]);
      descending.push("\n");
    }
  }
  function calculateInternational(number) {
    let vector = internationalVector[number]["vector"];
    let sentence = internationalVector[number]["sentence"];
    let similarity = 0;
    let similarities = {};
    for (let i = 0; i < 9950; i++) {
      similarity = cosSimilarity(vector, internationalVector[i]["vector"]);
      similarities[i] = similarity;
    }
    let arr = similarities;
    var keys = [];
    for (var key in arr)
      keys.push(key);
    function descendingCompare(a, b) {
      return arr[b] - arr[a];
    }
    function ascendingCompare(a, b) {
      return arr[a] - arr[b];
    }
    keys.sort(descendingCompare);
    console.log(keys);
    internationaldescending = [];
    for (let i = 0; i < 10; i++) {
      if (i !== 0) {
        internationaldescending.push("	");
      }
      console.log("descending");
      console.log(internationalVector[keys[i]]["sentence"]);
      internationaldescending.push(internationalVector[keys[i]]["sentence"]);
      internationaldescending.push("\n");
    }
    internationaldescending.push("\n");
  }
  function handleCalculate(array) {
    alls = [];
    allsA = [];
    for (let i = 0; i < array.length; i++) {
      calculate(array[i]);
      alls.push(descending);
      allsA.push(ascending);
    }
  }
  function handleInternationalCalculate(array) {
    allsDescending = [];
    allsAscending = [];
    for (let i = 0; i < array.length; i++) {
      calculateInternational(array[i]);
      allsDescending.push(internationaldescending);
      allsAscending.push(internationalascending);
    }
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("img", {
    src: pic,
    alt: "picture"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    className: "backward",
    onClick: handleNationalBackwardClick
  }, "戻る"), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    onClick: () => {
      handleCalculate(national[nationalMotion][1]);
      handleNationalClick();
    }
  }, "national motion"), /* @__PURE__ */ React.createElement("button", {
    className: "copy",
    onClick: () => copy(national[nationalMotion][0])
  }, "Copy"), /* @__PURE__ */ React.createElement("div", {
    className: "motion"
  }, national[nationalMotion][0]), /* @__PURE__ */ React.createElement("button", {
    className: "modalButton",
    onClick: () => {
      handleCalculate(national[nationalMotion][1]);
      setShowModal(!showModal);
    }
  }, "most similar"), showModal ? /* @__PURE__ */ React.createElement("div", {
    className: "dmotion"
  }, alls) : /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    className: "backward",
    onClick: handleInternationalBackwardClick
  }, "戻る"), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    onClick: () => {
      handleInternationalCalculate(international[internationalMotion][1]);
      handleInternationalClick();
    }
  }, "international motion"), /* @__PURE__ */ React.createElement("button", {
    className: "copy",
    onClick: () => copy(international[internationalMotion][0])
  }, "Copy"), /* @__PURE__ */ React.createElement("div", {
    className: "motion"
  }, international[internationalMotion][0])), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "486 national motions and 306 international motions collected by utds. http://resources.tokyodebate.org/debate-motion/motion/ https://www.sbert.net/ "));
}
export default App;
