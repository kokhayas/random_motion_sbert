import React, {useState} from "../_snowpack/pkg/react.js";
import {useCopyToClipboard} from "../_snowpack/pkg/usehooks-ts.js";
import "./App.css.proxy.js";
import international from "./data/internationalText.json.proxy.js";
import national from "./data/nationalText.json.proxy.js";
import pic from "./utdslogo.png.proxy.js";
let nationalHistory = new Array();
let internationalHistory = new Array();
function App({}) {
  const [count, setCount] = useState(0);
  const [nationalMotion, setNationalMotion] = useState(0);
  const [internationalMotion, setInternationalMotion] = useState(0);
  const [value, copy] = useCopyToClipboard();
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
    onClick: handleNationalClick
  }, "national motion"), /* @__PURE__ */ React.createElement("button", {
    className: "copy",
    onClick: () => copy(national[nationalMotion])
  }, "Copy"), /* @__PURE__ */ React.createElement("div", {
    className: "motion"
  }, national[nationalMotion]), /* @__PURE__ */ React.createElement("div", null, "number: ", nationalMotion)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    className: "backward",
    onClick: handleInternationalBackwardClick
  }, "戻る"), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    onClick: handleInternationalClick
  }, "international motion"), /* @__PURE__ */ React.createElement("button", {
    className: "copy",
    onClick: () => copy(national[nationalMotion])
  }, "Copy"), /* @__PURE__ */ React.createElement("div", {
    className: "motion"
  }, international[internationalMotion])), /* @__PURE__ */ React.createElement("p", null, "486 national motions and 306 international motions collected by utds. free to use."));
}
export default App;
