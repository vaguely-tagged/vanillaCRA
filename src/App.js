
import React from "react";
import "./App.css";
import Test from "./Test";

class App extends React.Component{
  render(){
    return(
        <div>
            <div className="App">
                <h1> Hello, World! </h1>
            </div>
                <Test/>
        </div>
    );
  }
}

export default App;