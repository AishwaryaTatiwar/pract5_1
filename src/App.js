import logo from './logo.svg';
import './App.css';
import react,{useState} from "react";

function App(props) {
  
  const change1 = (event) => {
    setS1(event.target.value);
        }
  const change2 = (event) => {
    setS2(event.target.value);
          }
  const change3 = (event) => {
    setS3(event.target.value)
  }
  const change4 = (event) => {
    setS4(event.target.value)
  }
  const calculate=()=>
  {
    let tot=(s1*1+s2*1+s3*1+s4*1)*1;
    let per=(tot/4.0);
    setTot(tot);
    setPer(per);
  }
  
  const[s1,setS1]=useState();
  const[s2,setS2]=useState();
  const[s3,setS3]=useState();
  const[s4,setS4]=useState();
  const[tot,setTot]=useState(0);
  const[per,setPer]=useState(0);
  return (
    <>
    <div className="App">
      <div className="title1">Student's Score Calculation System</div>
      <br></br>
      <center>
        <table border="2">
          <tr>
            <th className="name">Name:</th>
            <th className="back"><input type="text" className="name" placeholder="Enter your name"></input></th>
          </tr>
          <tr>
          <th className='name'>Section : </th>
          <th className='back'> <input type="text" className='name' placeholder="Enter
           section"></input></th>
          </tr>
          <tr>
          <th colspan="4" className='sec'>Enter the marks of subjects</th>
          </tr>
          <tr>
        <th className='entry'>1.CWS :</th>
        <th colspan="3" className='back' ><input type="text" placeholder="Enter cws
        marks" value={s1} onChange={change1} className='entry'></input></th>
        </tr>
        <tr>
           <th className='entry'>2.OOPS :</th>
          <th colspan="3" className='back'><input type="text" className='entry'
          placeholder="Enter oops marks" value={s2} onChange={change2}></input></th>
        </tr>
        <tr>
        <th className='entry'>3.Maths :</th>
        <th colspan="3" className='back'><input type="text" className='entry'
         placeholder="Enter maths marks" value={s3} onChange={change3}></input></th>
        </tr>
        <tr>
        <th className='entry'>4.Physics :</th>
        <th colspan="3" className='back'><input type="text" className='entry'
        placeholder="Enter physics marks" value={s4} onChange={change4}></input></th>
        </tr>
        <tr>
        <th colspan="4" className='back1'><button onClick={calculate}
        className='btn'>Calculate Score</button></th>
        </tr>
        <tr>
        <th className='name'> Total Marks :</th>
        <th colspan="3" className='back'><input type="text" value={tot} disabled
        className='name'></input></th>
        </tr>
        <tr>
        <th className='name'>Average:</th>
        <th colspan="3" className='back'><input type="text" value={per} disabled
        className='name'></input></th>
        </tr>
        </table>
      </center>
    </div>

    </>
  );
}

export default App;
