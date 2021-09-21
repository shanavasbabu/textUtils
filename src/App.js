import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggle = ()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Enable","success");
      document.title="TextUtils - Dark Mode";
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enable","success");
      document.title="TextUtils - Light Mode";

    }
  }
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1800)
  }

  return (
    <div className="App">
    <Router>
      <Navbar title="Textutils" mode ={mode} toggle={toggle} />
      <Alert alert={alert} />
      <div className="container">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextFrom showAlert={showAlert} heading="Enter the Text to analyze"  mode ={mode}/>  
          </Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
