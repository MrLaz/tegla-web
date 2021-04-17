import React, { Component } from 'react';
import "./App.css";
import Navbar from "./Navbar";
import Gallery from "./Gallery";


import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    render() {
        return (
            <>
            <div className="App">
                <Navbar/>
               
               
            </div>
            <div className="slideshow">
               <Gallery/>

            </div>
            </>
        )
    }
}
