import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData]=useState({height:"",weight:"",age:"",gender:""})
  function calculate(){
    if(data.height==="" || data.height<0|| data.weight==="" || data.weight<0){
    alert("positive numbers only")
   }
    else if(data.age>120||data.age<2){
    alert("Please provide an age between 2 and 120")
   }
   else{
       const h =data.height/100;
       const result=data.weight/(h*h);
       alert(result)}
  }
    
   
 return (
  
   <div id='main-container'>
     <form>
       <div className='age'>
       <label>Age</label>
       <input onChange={(e)=>{setData({...data,age:e.target.value})}} value={data.age} name="age"/><span>2-120</span><br/></div>
       <label>Gender:</label>
        <input type="radio"   name="" value="Male"/>
        <label for="Male">Male</label>
        <input type="radio"   name="fav_language" value="Female"/>
        <label for="Female">Female</label><br/>
       <label>Height</label>
       <input onChange={(e)=>{setData({...data,height:e.target.value})}} value={data.height} name="height"/><br/>
       <label >Weight</label>
       <input onChange={(e)=>{setData({...data,weight:e.target.value})}} value={data.weight} name="weight"/><br/>
       <button onClick={calculate}>Calculate</button>
    
     </form>
   </div>
 )
}

export default App;
