import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image1 from "./Images/astronomy-.jpg"
import Image2 from "./Images/back.jpg"
import Image3 from "./Images/beast.jpg"
import Image4 from "./Images/city-planet.jpg"
import {FaTimes } from 'react-icons/fa';
export default class CarousImages extends Component {

    handleclick=()=> {
        
        console.log("close carousel");
    }

    render() {
        return (
            <>
             

                <FaTimes className="x"  onClick={this.handleclick} />
             
                <Carousel >
                    <Carousel.Item>
            <img
            className="d-block w-100"
            src={Image1}
            alt="First slide"
            />
            <Carousel.Caption>
           
            <h3 >First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Image2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Image3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Image4}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
                </Carousel>
                
            </>
        )
    }
}