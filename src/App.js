import React, { Component } from 'react';
import "./App.css";
import {FaBars,FaTimes } from 'react-icons/fa';
import Home from "./Home";
import Contact from "./Contact";
import Gallery from "./Gallery";
import {BrowserRouter, Link, Route} from "react-router-dom";


export default class App extends Component {


  state= {
    hamburger:true,
    navlist:"navlist-none",
  
}
  handleclick = () => {
    if (this.state.hamburger) {
        this.setState({hamburger:false,navlist:"navlist-vertical"})
  }else this.setState({hamburger:true,navlist:"navlist-none"})
  
}
  ikon = () => {
    if (this.state.hamburger) {
        return <FaBars className="hamburger" onClick={this.handleclick}/>;
  }else return <FaTimes className="hamburger" onClick={this.handleclick}/>;
}

navlistclick=()=> {
  this.setState({hamburger:true,navlist:"navlist-none"});
}
  
    render() {
        return (
            

              

            <div className="App">
              
                    <BrowserRouter>
                      
                          <div className="navbar-container">
                                  <div className="logo">Logo</div>
                      
                                  <div className={this.state.navlist} onClick={this.navlistclick}>
                                    <Link to="/"  style={{ textDecoration: 'none',display:"block" }} className="navlist">Home</Link>
                                    <Link to="/gallery"  style={{ textDecoration: 'none',display:"block"  }} className="navlist">Gallery</Link>
                                    <Link to="/contact"  style={{ textDecoration: 'none',display:"block"  }} className="navlist">Contact</Link>
                                  </div>
                                  <div className="navlist-horizontal">
                                    <Link to="/" style={{ textDecoration: 'none' }} className="navlisthor">Home</Link>
                                    <Link to="/gallery" style={{ textDecoration: 'none' }}  className="navlisthor">Gallery</Link>
                                    <Link to="/contact" style={{ textDecoration: 'none' }}  className="navlisthor">Contact</Link>
                                  </div>
                                  {this.ikon()}
                          </div>
                        
                          <Route exact path="/" component={Home}/>
                          <Route exact path="/gallery" component={Gallery}/>
                          <Route exact path="/contact" component={Contact}/>
                        
                       
                    </BrowserRouter>
                    
                    
                
            </div>
           
        )
    }
}
              
               
               
                
                  

