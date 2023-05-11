import { useState } from 'react';
import './App.css';
import Alerts from './componants/Alerts';
import About from './componants/About';
import Navbar from './componants/Navbar';
import TextArea from './componants/TextArea';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() 
{
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    }) 
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been Enabled","success")
      document.title = "TextUtils - Dark Mode"
    }
    else{
        setMode('light');
        document.body.style.backgroundColor = 'rgb(215, 237, 255)';
        showAlert("Light mode has been Enabled","success")
        document.title = "TextUtils - Light Mode"
      }
  }

 return (
  <>
  <Router>
  <Navbar title= "Textutils" HomeText="Home" mode={mode} toggleMode={toggleMode}/>
  <Alerts alert={alert}/>

  <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About title1= "Introduction" title2= "Applications" title3= "Vesion" title4= "Mision" mode={mode}/>}/>         
          <Route path="/" element={<TextArea showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> }/>
    </Routes>        
  </div>
  </Router>
  </>
 );
}

export default App;
