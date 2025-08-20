import "./Quiz.css"
import {data} from "../../assets/Quiz App React Assets/Assets/data.js";
import {useRef, useState} from "react";
function QuizApp() {

  let [index, setindex] = useState(0);
  let [Question,setNextQuestion]=useState(data[index]) 
  let [lock,setlock]=useState(false);
  let [score,setscore]=useState(index);
  let [result,setresult]=useState(false);
  

  let option1= useRef(null);
  let option2= useRef(null);
  let option3= useRef(null);
  let option4= useRef(null);
  const option_array=[option1,option2,option3,option4];
  
  const checkAns=(e , ans)=>{
    console.log(e.target.classList)
    if(lock === false){
      if(Question.ans === ans){
        e.target.classList.add("correct");
      }
      else{
        e.target.classList.add("incorrect");
        option_array[Question.ans-1].current.classList.add("correct");    
      }
      setlock(true);
    }
  }
 
  const next = ()=>{
    if(lock===true){
      if(index===data.length-1){
        setresult(true);
        return 0;
      }
      setindex(index+1);
      setNextQuestion(data[index+1]);
      setlock(false);
      setscore(score+1);
      option_array.map((item)=>{
        item.current.classList.remove('incorrect');
        item.current.classList.remove('correct');
        return null;
      })
    }

  }

  const reset=()=>{
    setindex(0);
    setNextQuestion(data[0]);
    setlock(false);
    setscore(0);
    setresult(false); 
  }

  return <>
    <div className="container">
      <h1>Quiz App</h1>
      <hr/>
      { result ? <> </>   :
       <> <h2>{index+1}. {Question.question}. </h2>
      <ul>
        <li ref={option1} onClick={(e)=>{checkAns(e,1)}}> {Question.option1} </li>
        <li ref={option2} onClick={(e)=>{checkAns(e,2)}}> {Question.option2} </li>
        <li ref={option3}onClick={(e)=>{checkAns(e,3)}}> {Question.option3} </li>
        <li ref={option4} onClick={(e)=>{checkAns(e,4)}}> {Question.option4} </li>
      </ul>
      <button onClick={()=>{ next()}}>next</button>
      <div className="index">{score+1} of {data.length} question</div></> }

      {result? <>  <h2>You Score {score} out of {data.length} </h2>
      <button onClick={reset}>Reset</button></> : <> </>}

    </div>
  </>
}
export default QuizApp;
