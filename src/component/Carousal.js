import React from 'react';
import Slider from "react-slick";
import Maincarousal from '../content/Maincarousal';
import { AiFillRightCircle } from 'react-icons/ai';
import {AiFillLeftCircle} from 'react-icons/ai';


function Carousal() {
    return (
        <Slider
            dots={false}
            arrows={true}
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            autoplaySpeed={3000}
            nextArrow={<AiFillRightCircle style={{position:"relative"}} size="5rem" color="orange" />}
            prevArrow={<AiFillLeftCircle  style={{position:"relative"}} size="5rem" color="orange" />}>

            {Maincarousal.map((props, index) => (
                
                    <img className="text-center" src={props.Src} style={{ maxHeight: "10vh" }} />
               
            ))}

        </Slider>
    )
}


export default Carousal