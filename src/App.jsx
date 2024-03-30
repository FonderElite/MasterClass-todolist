import { useState } from "react";
import Todo from "./components/Todo";
import './App.css'
// import InlineComponent from './components/InlineComponent'
// import OutlineComponent from "./components/OutlineComponent";
import Header from './components/Header'
function App(){

  return(
    <div className="App">
<Header/>
<Todo/>

    </div>
  )
}

export default App;
