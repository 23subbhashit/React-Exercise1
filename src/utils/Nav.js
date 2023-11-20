import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarCenteredExample"
          aria-controls="navbarCenteredExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarCenteredExample"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <Link to="/" className="navbar-brand" style={{ color: '#DA70D6', border: '1px solid balck' }}>
              Meesho
            </Link>

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search for ..." aria-label="Search" />
            </form>

            <li className="nav-item elements">
              <Link to="/download" className="nav-link" aria-current="page">
                <i className="fas fa-mobile-alt"></i> Download App
              </Link>
            </li>
            <li className="nav-item elements">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item elements">
              <Link to="/cart" className="nav-link" aria-current="page">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link" aria-current="page">
                <i className="fas fa-user"></i> Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mt-5">
    
    <div class="container-fluid">
    
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarCenteredExample"
        aria-controls="navbarCenteredExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
  
     
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarCenteredExample"
      >
        
        <ul class="navbar-nav mb-2 mb-lg-0">



          <li class="nav-item">
            <div class="navdrop">
                <div class="dropbtn">Woman Ethnic</div>
                
                <div class="dropdown-content">
                    <div class="row">

                        <div class="col-5">
                            <h5 class="text-center" style ={{color:'#DA70D6'}}> Sarees  </h5>
                            <a href="#" class="nav-link">Silk</a>
                            <a href="#" class="nav-link">Cotton</a>
                            <a href="#" class="nav-link">Georgette</a>
                        </div>
                        <div class="col-7">
                          <h5 class="text-center" style ={{color:'#DA70D6'}}> Kurtis  <span></span></h5>
                            <a href="#" class="nav-link">Anarkali</a>
                            <a href="#" class="nav-link">Rayon</a>
                            <a href="#" class="nav-link">Cotton</a>
                        </div>
                    </div>
                  
                </div>
              </div>
          </li>
          <li class="nav-item">
            <div class="navdrop">
                <div class="dropbtn">Women Western</div>
                
                <div class="dropdown-content">
                    <div class="row">
                      <div class="col-5">
                        <h5 class="text-center" style ={{color:'#DA70D6'}}> Top  </h5>
                        <a href="#" class="nav-link">Dresses</a>
                        <a href="#" class="nav-link">Sweaters</a>
                        <a href="#" class="nav-link">Jumpsuites</a>
                    </div>
                    <div class="col-7">
                      <h5 class="text-center" style ={{color:'#DA70D6'}}> Bottom  <span></span></h5>
                        <a href="#" class="nav-link">Jeans</a>
                        <a href="#" class="nav-link">Sorts</a>
                        <a href="#" class="nav-link">Skirts</a>
                    </div>
                    </div>
                  
                </div>
              </div>
          </li>
          <li class="nav-item">
            <div class="navdrop">
                <div class="dropbtn">Men</div>
                
                <div class="dropdown-content">
                    <div class="row">
                        <div class="col-5">
                          <h5 class="text-center" style ={{color:'#DA70D6'}}> Top  </h5>
                            <a href="#" class="nav-link">Tshirts</a>
                            <a href="#" class="nav-link">Shirts</a>
                        </div>
                        <div class="col-7">
                          <h5 class="text-center" style ={{color:'#DA70D6'}}> Bottom  <span></span></h5>
                            <a href="#" class="nav-link">Jeans</a>
                            <a href="#" class="nav-link">Trouser</a>
                        </div>
                    </div>
                  
                </div>
              </div>
          </li>
          <li class="nav-item">
            <div class="navdrop">
                <div class="dropbtn">Kids</div>
                
                <div class="dropdown-content">
                    <div class="row">
                        <div class="col-5">
                          <h5 class="text-center" style ={{color:'#DA70D6'}}> Accesories  </h5>
                            <a href="#" class="nav-link">Soft Toys</a>
                            <a href="#" class="nav-link">Watches</a>
                            <a href="#" class="nav-link">Bags</a>
                        </div>
                        <div class="col-7">
                          <h5 class="text-center" style ={{color:'#DA70D6'}}> Baby <span></span></h5>
                            <a href="#" class="nav-link">Baby Care</a>
                        </div>
                    </div>
                  
                </div>
              </div>
          </li>
          <li class="nav-item">
            <div class="navdrop">
                <div class="dropbtn">Home & Kitchen</div>
                
                <div class="dropdown-content">
                    <div class="row">
                      <div class="col-5">
                        <h5 class="text-center" style ={{color:'#DA70D6'}}> Furnish  </h5>
                          <a href="#" class="nav-link">Bedsheets</a>
                          <a href="#" class="nav-link">Doormats</a>
                          <a href="#" class="nav-link">Curtains</a>
                      </div>
                      <div class="col-7">
                        <h5 class="text-center" style ={{color:'#DA70D6'}}> Decor <span></span></h5>
                          <a href="#" class="nav-link">Stickers</a>
                          <a href="#" class="nav-link">Clocks</a>
                          <a href="#" class="nav-link">Show Pieces</a>
                      </div>
                  
                </div>
              </div>
              </div>
          </li>
          
          
          
          


        </ul>
      
      </div>
     
    </div>
    
  </nav>
      
    </div>
  )
}
