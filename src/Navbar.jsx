import React, { Component } from 'react'

import {FaBars,FaTimes } from 'react-icons/fa';
export default class Navbar extends Component {
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
    render() {
        
        return (
                
                <div className="navbar-container">
                    <div className="logo">Logo</div>
                     
                    <div className={this.state.navlist} >
                        <div className="navlist">Home</div>
                        <div className="navlist">Gallery</div>
                        <div className="navlist">Contact</div>
                    </div>
                    <div className="navlist-horizontal" >
                        <div className="navlisthor">Home</div>
                        <div className="navlisthor">Gallery</div>
                        <div className="navlisthor">Contact</div>
                    </div>
                    
                    
                    {this.ikon()}
                </div>
            
        )
    }
}
