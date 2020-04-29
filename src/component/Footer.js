import React from 'react'
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
function Footer() {
    return (
        <div class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center"> <i class="d-block fa fa-stop-circle mb-3 text-muted fa-3x"></i>
        </div>
      </div>
      <div class="row">
        <div class="p-3 col-md-4 col-6">
          <h5> <b>Main</b> </h5>
          <ul class="list-unstyled">
            <li> <a href="#" style="">My Account</a> </li>
            <li> <a href="#">Order</a> </li>
            <li> <a href="#">Favourites</a> </li>
            <li> <a href="#">Customer Services</a> </li>
            <li> <a href="#">Return Product</a> </li>
          </ul>
        </div>
        <div class="p-3 col-md-4 col-6">
          <h5> <b>Others</b> </h5>
          <ul class="list-unstyled">
            <li> <a href="#">FAQ</a> </li>
            <li> <a href="#">Terms and Condition</a> </li>
            <li> <a href="#">Privarcy Policy</a> </li>
            <li> <a href="#">Support</a> </li>
            <li> <a href="#">About Us</a> </li>
          </ul>
        </div>
        <div class="col-md-4 p-3 my-3">
          <h5 class="">Feedback</h5>
          <div class="row">
            <div class="col-md-12 d-flex align-items-center justify-content-between my-2"> <a href="#">
                <FaFacebookF color="" size=""/>
              </a> <a href="#">
               <FaTwitter color="" size=""/>
              </a> <a href="#">
                <FaInstagram color="" size=""/>
              </a>
              <a href="#">
                <FaLinkedinIn color="" size=""/>
              </a> </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Footer
