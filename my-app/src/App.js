import { useRef, useState } from "react";
import Nav from "./components/Nav";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import fe from "./components/assests/fe.jpg";
function App() {
   const inputRef = useRef(null);
   const resultRef = useRef(null);
   const [result, setResult] = useState(0);

   const plus = (e) => {
      e.preventDefault();
      setResult((result) => result + Number(inputRef.current.value));
   };

   const minus = (e) => {
      e.preventDefault();
      setResult((result) => result - Number(inputRef.current.value));
   };

   const multiply = (e) => {
      e.preventDefault();
      setResult((result) => result * Number(inputRef.current.value));
   };

   const divide = (e) => {
      e.preventDefault();
      setResult((result) => result / Number(inputRef.current.value));
   };

   const resetInput = (e) => {
      e.preventDefault();
      inputRef.current.value = "";
   };

   const resetResult = (e) => {
      e.preventDefault();
      setResult(0);
   };

   return (
      <div className="Appa">
        
         <div>
            <h1 className="Aps" >Simple Calculator</h1>
         </div>
         <form>
            <p className = 'we' ref={resultRef}>Result: {result}</p>
            <input
               ref={inputRef}
               type="number"
               placeholder="Type a number"
            />
            <br>
            </br>
            <br>
            </br>
            
            <div  className = "SAD" >
           
            <button className = "SAD" onClick={plus}>Add</button>
            <button onClick={minus}>Minus</button>
            <button onClick={multiply}>Multiply</button>
            <button onClick={divide}>Divide</button>
            <button onClick={resetInput}>Reset Input</button>
            <button onClick={resetResult}>Reset Result</button>
         </div>
         </form>
         <Intro1/>
<Intro2/>
<Intro3/>
<center> <img  src={fe} className="qw"></img></center>
      </div>
   );
}

export default App;
