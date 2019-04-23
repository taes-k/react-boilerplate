import React, { Component } from "react";
import './App.css';
import Todo from "./Components/TodoComponent"

class App extends Component{
    render (){
        return (
            <div className="App">
                <p>React Todolist</p>

                <Todo text="Webpack 설치"/>
                <Todo text="Babel 설치"/>
                <Todo text="React 설치"/>
                <Todo text="Redux 설치"/>
            </div>
        );
    }
};

export default App;