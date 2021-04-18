import React, { Component } from 'react'
import Image11 from "./Images/back.jpg"
import "./App.css";
export default class JobsIkons extends Component {
    render() {
        return (
            <div className="jobs-container">
                <img className="jobimg" src={Image11} alt="image11"/>
                <img className="jobimg"src={Image11} alt="image11"/>
                <img className="jobimg"src={Image11} alt="image11"/>
                <img className="jobimg"src={Image11} alt="image11"/>
                <img className="jobimg"src={Image11} alt="image11"/>
                <img className="jobimg"src={Image11} alt="image11"/>
                <img className="jobimg"src={Image11} alt="image11"/>
            </div>
        )
    }
}
