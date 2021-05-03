import React from "react";
import Table from "./components/index"
import './App.css';


function App() {
  
  return (
    <div className="App">
      <div className="jumbotron bg-info">
        <h1 className="text-white display-3">
          Employee Directory
        </h1>
      </div>
      <Table/>
    </div>
  );
}

export default App;
