import './App.css';
import TextUtils from './textutils';
import Navbar from './Navbar'
import { useState } from 'react';
import Alert from './Alert';

function App() {
  const [mode, setMode] = useState(false)
  const [alert, setAlert] = useState(null)
 
  //Updating mode (theme)
  function updateMode(data) {
    setMode(data)
    if(data===false){
    showAlert("Succesfully switched to Light Mode", "success")
    }
    else{
    showAlert("Succesfully switched to Dark Mode", "success")

    }
  }

  //Alert
  function showAlert(message, type) {
    setAlert({ mess: message, ty: type })
    setTimeout(() => {
      setAlert(null)     
    }
      , 1500)

  }
  return (<>
    <Navbar mode={mode}
      modeStatus={updateMode}
    />
    <Alert alert={alert} />
    <TextUtils showAlert={showAlert} mode={mode}/>


  </>
  );

}

export default App;
