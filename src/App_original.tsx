import React, { useState } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
import './App.css';


import international from './data/internationalText.json';
import national from './data/nationalText.json';

// import international from './data/international.json';
// import national from './data/national.json';

import pic from "./utdslogo.png";


interface AppProps {}

let nationalHistory = new Array();
let internationalHistory = new Array();

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  const [nationalMotion, setNationalMotion] = useState(0);
  const [internationalMotion, setInternationalMotion] = useState(0);
  const [value, copy] = useCopyToClipboard()
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
		if (num === 12){
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
//   useEffect(() => {
//     const timer = setTimeout(() => setCount(count + 1), 1000);
//     return () => clearTimeout(timer);
//   }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
		<img src={pic} alt="picture"/>
		{/* <h3 className="title">the University of Tokyo   UTDS</h3> */}
		<div>
			<button className="backward" onClick = {handleNationalBackwardClick}>戻る</button>
			<button className="button" onClick={handleNationalClick}>national motion</button>
			<button className="copy" onClick={() => copy(national[nationalMotion])}>Copy</button>
			{/* <button className="backward" onClick = {handleNationalBackwardClick}>戻る</button> */}
			<div className="motion">{national[nationalMotion]}</div>
			<div>number: {nationalMotion}</div>
		</div>
		<div>
			<button className="backward" onClick = {handleInternationalBackwardClick}>戻る</button>
			<button className="button" onClick={handleInternationalClick}>international motion</button>
			<button className="copy" onClick={() => copy(national[nationalMotion])}>Copy</button>
			<div className="motion">{international[internationalMotion]}</div>
		</div>
		<p>486 national motions and 306 international motions collected by utds. free to use.</p>
    </div>
  );
}

export default App;