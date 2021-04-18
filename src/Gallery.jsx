import React, { Component } from 'react';
import CarouselJob01 from "./CarouselJob01";
import CarouselJob02 from "./CarouselJob02";
import JobsIkons from "./JobsIkons";
export default class Gallery extends Component {
    state= {
        isCarousel:true,
    }
    klikk=()=>{
        this.setState({isCarousel:true})
    }

    //     window.innerWidth
    render() {
        let isCarousel=this.state.isCarousel;
        return (
            <div className="slideshow">
                {isCarousel ?
                <>
                <CarouselJob01/>
                <CarouselJob02/>
                </>
                :
               
                <JobsIkons /> }
                
            </div>
        )
    }
}
