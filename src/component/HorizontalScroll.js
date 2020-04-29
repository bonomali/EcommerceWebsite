import React from 'react';
import Slider from "react-slick";
import BestOffer from '../content/BestOffer'
import { AiFillRightCircle } from 'react-icons/ai';
import {AiFillLeftCircle} from 'react-icons/ai';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HorizontalScroll() {

    return (
         <div>
         <div className="container">
             <div className="clearfix mt-5 mb-2">
                 <h4 className="float-left">Catelog</h4>
                 <h5 className="float-right text-uppercase">See All</h5>
             </div>
         <Slider
          dots={false}
          arrows={true}
          infinite={true}
          slidesToShow={4}
          slidesToScroll={1}
          autoplaySpeed={3000}
          nextArrow={<AiFillRightCircle size="5rem" color="orange"/>}
          prevArrow={<AiFillLeftCircle size="5rem" color="orange" />}>

        {BestOffer.map((props,index)=>(
            <div className="col">
            <div class="card"> <img class="card-img-top" src={props.src} alt="Card image cap"/>
              <div class="card-body pb-0 px-0">
                <p class="card-text text-center">{props.content}</p>
                <button className="btn-block btn-lg" style={{bottom:"0vh",color:"white",backgroundColor:"orange"}}>{props.cost}</button>
              </div>
            </div>
            </div>
        ))}

        </Slider>
        </div>
        </div>
    )
}

export default HorizontalScroll
