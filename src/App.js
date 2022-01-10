//import logo from './logo.svg';
import React, { useState } from 'react'

import './App.css';
import About from './components/About';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom';

function App() {
  const[mode,setMode]=useState('light');
  const[btntext,setbtntxt]=useState(' Enable Dark Mode');
  const[alert,setalert]=useState(null);
  const showalert=(message,type)=>{
         setalert({            // set alert is used to set state of alerts.
           message:message,
           type:type
         })
         setTimeout(()=>{
           setalert(null);
         },1000)
  }
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      setbtntxt('Enable Light Mode');
      document.body.style.backgroundColor='#000066'
      document.body.style.color='white'
      showalert('Dark Mode is enabled','success')
      document.title="Text Processor- Dark Mode"
    }
    else{
      setMode('light')
      setbtntxt(' Enable Dark Mode');
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showalert('Light Mode is enabled','success')
      document.title="Text Processor"
    }
    
  }
  return (
    <>
    <Router>
   <Navbar title="Text Processor" mode={mode} togglemode={togglemode} btntxt={btntext} />
   <Alerts alert={alert}/>
   <Switch>
          <Route exact path="/about">
            <About />
          </Route>
         
          <Route exact path="/">
          <Textform heading="Enter the text to analyze below" showalert={showalert}/>
          </Route>
        </Switch>
   {/* <About/> */}
   </Router>
  




    </>
  );
}

export default App;
