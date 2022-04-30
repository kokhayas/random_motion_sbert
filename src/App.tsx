import cosSimilarity from "cos-similarity";
import React, { useState } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
import './App.css';
// import international from './data/internationalText.json';
// import national from './data/nationalText.json';
import international from './data/international.json';
import nationalVector from './data/modifiedmotionNational.json';
import internationalVector from "./data/modifiedmotionInternational.json"
import national from './data/national.json';
import pic from "./utdslogo.png";

import motionNational from "./data/motionNational.json"
import motionInternational from "./data/motionInternational.json"

interface AppProps {}

let nationalHistory = new Array();
let internationalHistory = new Array();

// let n6LD = new Array();
// let n6LA = new Array();
let n6LAs = new Array();
let n6LDs = new Array();
let i8nDs = new Array();
let i8nAs = new Array();
// let i8nD = new Array();
// let i8nA = new Array();
// let n6L = 4599;
// let i8n = 5350;

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  const [nationalMotion, setNationalMotion] = useState(0);
  const [internationalMotion, setInternationalMotion] = useState(0);
  const [value, copy] = useCopyToClipboard()
  const [showModal, setShowModal] = useState(false);
  const [showModalA, setShowModalA] = useState(false);
  const [ishowModal, setiShowModal] = useState(false);
  const [ishowModalA, setiShowModalA] = useState(false);
//   let nationalHistory = new Array();
//   let internationalHistory: number[] = [];
  let num: number = -1;
//   const history = useHistory();
  // Create the counter (+1 every second).
  function handleNationalClick() {
          console.log(nationalHistory);
        nationalHistory.push(nationalMotion);
        num = Math.floor(Math.random()*486);
        setNationalMotion(num);
        // nationalHistory.push(num);
        console.log(num);
  }
  function handleInternationalClick() {
        internationalHistory.push(internationalMotion);
        num = Math.floor(Math.random()*306);
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


  function Calculate(number, Vector, flag) {

    //   const number = national[nationalMotion][1][0]
      let vvector = Vector[number]["vector"]
      let sentence = Vector[number]["sentence"]
    //   console.log(vector);
    //   console.log(sentence);
      let similarity = 0;
      let similarities = {};
	  let N;
	  if (flag) {
		  N = 4599;
	  }
	  else {
		  N = 5351;
	  }
      for (let i=0; i<N; i++){
        similarity = cosSimilarity(vvector, Vector[i]["vector"]);
        // console.log(similarity);
        similarities[i] = similarity;
      }
      let arr = similarities;
      var keys=[];
    for(var key in arr)keys.push(key);

    function DCompare(a,b){
        return arr[b]-arr[a];
    }

    function ACompare(a,b){
        return arr[a]-arr[b];
    }

	let D = [];
	let A = [];

    keys.sort(DCompare);
	let howmany = 11;
    for(let i=0; i<howmany; i++){
        if (i > 0 && i < howmany-1) {
			D.push("\t(");
			// D.push(String(similarities[keys[i]]).slice(0, 4));
			D.push(String(i));

			D.push(")\t");
        }
		else if (i===howmany-1) {
			D.push("\t(");
			// D.push(String(similarities[keys[i]]).slice(0, 4));
			D.push(String(i));

			D.push(")\t");
		}
		else {
			D.push("\n       \t【");

		}
        console.log("D");
        // console.log(Vector[keys[i]]["sentence"]);
        // D.push(Vector[keys[i]]["sentence"]);
		if (flag) {
			D.push(motionNational[keys[i]]);
		} else {
			D.push(motionInternational[keys[i]]);
		}
		D.push()
		if (i === 0) {
			D.push("】");
		}
        D.push("\n")
    }
	// D.push("\t    :\n")



	// keys.sort(ACompare);
	// for(let i=0; i<5; i++){
    //     if (i < 4) {
	// 		D.push("\t(");
	// 		// D.push(String(similarities[keys[i]]).slice(0, 4));
	// 		D.push(String(N - 5 + i));
	// 		D.push(")\t");
    //     }
	// 	else if (i===4) {
	// 		D.push("\t(");
	// 		// D.push(String(similarities[keys[i]]).slice(0, 4));
	// 		D.push(String(N - 5 + i));
	// 		D.push(")\t");
	// 	}
	// 	else {
	// 		D.push("\n\t");
	// 	}
    //     console.log("A");
    //     console.log(Vector[keys[i]]["sentence"]);
    //     D.push(Vector[keys[i]]["sentence"]);
    //     D.push("\n")
		// if (i===4) {
		// 	D.push("         -----------------------------")
		// }
    // }

    return [D, A]

  }



	function handleCalculate(array, Vector, flag){
    //   n6LDs = [];
    //   n6LAs = [];
	  let x = [];
	  let y = [];
	  let xs = [];
	  let ys = [];
    for (let i=0; i<array.length; i++){
        [x, y] = Calculate(array[i], Vector, flag);
        xs.push(x);
        ys.push(y);
    }
	return [xs, ys]
  }

  return (
    <div className="App">
        <img src={pic} alt="picture"/>
        {/* <h3 className="title">the University of Tokyo   UTDS</h3> */}
        <div>
            <button className="backward" onClick = {handleNationalBackwardClick}>戻る</button>
            <button className="button" onClick={() => {[n6LDs, n6LAs] = handleCalculate(national[nationalMotion][1], nationalVector, true); handleNationalClick();}}>national motion</button>
            <button className="copy" onClick={() => copy(national[nationalMotion][0])}>Copy</button>
            {/* <button className="backward" onClick = {handleNationalBackwardClick}>戻る</button> */}
            <div className="motion">{national[nationalMotion][0]}</div>

            {/* <div>first number: {national[nationalMotion][1][0]}</div> */}
            {/* <div>length: {national[nationalMotion][1].length}</div> */}

            {/* <div>{cosSimilarity(nationalVector[national[nationalMotion][1][0]]["vector"], nationalVector[national[nationalMotion+1][1][0]]["vector"])}</div> */}
            <button className="modalButton" onClick={() => {[n6LDs, n6LAs] = handleCalculate(national[nationalMotion][1], nationalVector, true); setShowModal(!showModal)}}>similarity</button>
            {showModal?(<div className="dmotion">{n6LDs}</div>):(<div></div>)}

            {/* <button className="modalButton" onClick={() => {handleCalculate(national[nationalMotion][1]); setShowModalA(!showModalA)}}>least similar</button> */}
            {/* {showModalA?(<div className="dmotion">{i8nA}</div>):(<div></div>)} */}

        </div>

<br></br>
<br></br>
<br></br>
        <div>
            <button className="backward" onClick = {handleInternationalBackwardClick}>戻る</button>
            <button className="button" onClick={() => {[i8nDs, i8nAs] = handleCalculate(international[internationalMotion][1], internationalVector, false); handleInternationalClick();}}>international motion</button>
            <button className="copy" onClick={() => copy(international[internationalMotion][0])}>Copy</button>
            <div className="motion">{international[internationalMotion][0]}</div>
            {/* <div>number: {international[internationalMotion][1][0]}</div> */}
			<button className="modalButton" onClick={() => {[i8nDs, i8nAs] = handleCalculate(international[internationalMotion][1], internationalVector, false); setiShowModal(!ishowModal)}}>similarity</button>
            {ishowModal?(<div className="dmotion">{i8nDs}</div>):(<div></div>)}

            {/* <button className="modalButton" onClick={() => {handleInternationalCalculate(international[internationalMotion][1]); setiShowModal(!ishowModal)}}>most similar</button> */}
            {/* <button className="modalButton formid" onClick={() => {handleInternationalCalculate(international[internationalMotion][1]); setiShowModal(!ishowModal)}}>least similar</button> */}
            {/* {ishowModal?(<div className="dmotion">{i8nD}</div>):(<div></div>)} */}

            {/* {ishowModalA?(<div className="dmotion">{i8nA}</div>):(<div></div>)} */}


        </div>
        <br></br>
        <p>486 national tournaments and 306 international tournaments, 4599 national motions and 5351 national motions collected by utds. http://resources.tokyodebate.org/debate-motion/motion/ https://www.sbert.net/ </p>
    </div>
  );
}

export default App;