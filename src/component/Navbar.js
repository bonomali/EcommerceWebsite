import React from 'react'

function Navbar() {
    return (
        <>
        <nav class="navbar navbar-light">
    <div class="container"> <a class="navbar-brand text-primary" href="#">
        <i class="fa d-inline fa-lg fa-circle"></i>
        <b> BRAND-2</b>
      </a> </div>
  </nav>
  <nav class="navbar navbar-expand-lg navbar-light" >
    <div class="container"> <button class="navbar-toggler navbar-toggler-right border-0 p-0" type="button" data-toggle="collapse" data-target="#navbar8">
      </button>
      <div class="collapse navbar-collapse" id="navbar8">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"> <a class="nav-link" href="#">MENU</a> </li>
          <li class="nav-item" style=""> <a class="nav-link" href="#">HOME</a> </li>
          <li class="nav-item" style=""> <a class="nav-link" href="#">ABOUT US</a> </li>
          <li class="nav-item"> <a class="nav-link" href="#">CONTACT US</a> </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mx-1"> <a class="nav-link" href="#">
              <i class="fa fa-github fa-fw fa-lg"></i>
            </a> </li>
          <li class="nav-item mx-1"> <a class="nav-link" href="#">
              <i class="fa fa-gitlab fa-fw fa-lg"></i>
            </a> </li>
          <li class="nav-item mx-1"> <a class="nav-link" href="#">
              <i class="fa fa-bitbucket fa-fw fa-lg"></i>
            </a> </li>
        </ul>
      </div>
    </div>
  </nav>
        </>
    )
}

export default Navbar
