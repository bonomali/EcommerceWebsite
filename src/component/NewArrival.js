import React from 'react'
import NewArrivalContent from '../content/NewArrival'
import Slider from "react-slick";
import { AiFillRightCircle } from 'react-icons/ai';
import {AiFillLeftCircle} from 'react-icons/ai';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function NewArrival() {
    return (
        <div>
         <div className="container py-5">
            <div className="container rounded" style={{border:"solid",borderColor:"orange",backgroundColor:"#FE7961"}}>
          <div className="row">   
          <div className="col-4">
            <div className="container">
                <h4>New Arrival</h4>
            </div>
            <a style={{position:"absolute",bottom:"0px"}}>See More</a>
          </div>
         <div className="col-8">    
         <Slider
          dots={false}
          arrows={true}
          infinite={true}
          slidesToShow={4}
          slidesToScroll={1}
          autoplaySpeed={3000}
          nextArrow={<AiFillRightCircle size="10em" color="orange"/>}
          prevArrow={<AiFillLeftCircle size="10em" color="orange" />}>

        {NewArrivalContent.map((props,index)=>(
            <div className="col">
            <div class="card"> <img class="card-img-top" style={{minHeight:"24vh"}} src={props.src} alt="Card image cap"/>
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
        </div>
        </div>
        </div>
    )
}

export default NewArrival
