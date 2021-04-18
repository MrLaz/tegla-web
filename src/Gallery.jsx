import React, { Component } from 'react';
import CarousImages from "./CarousImages";
import Jobs from "./Jobs";
export default class Gallery extends Component {
    state= {
        isCarousel:false,
    }
    klikk=()=>{
        this.setState({isCarousel:true})
    }
    render() {
        let isCarousel=this.state.isCarousel;
        return (
            <div className="slideshow">
                {isCarousel ?
                
                <CarousImages/>
                :
               
                <Jobs /> }
                
            </div>
        )
    }
}
