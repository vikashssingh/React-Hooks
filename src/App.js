import { useState } from 'react';
import './App.css';
//myName varible ye use hota hai initial value  ke liye
//setMyName is also variable isko use krte hn value ko update krne ke liye
function App() {
  const [myName, setMyName] = useState("vikash singh");
  //changeName is function
  const changeName = () => {
    let val = myName;
    // if (val === "vikash singh") {
    //   setMyName("vikash kumar");
    // }
    // else {
    //   setMyName("vikash singh");
    // }

    //use ternary oprator
    (val === "vikash singh") ? setMyName("vikash kumar") : setMyName("vikash singh");

  }

  console.log(myName)
  return (
    <div className="header">
      <h1>{myName}</h1>
      <button className="btn" onClick={changeName}>
        Click Me
      </button>
    </div>

  );
}

export default App;
