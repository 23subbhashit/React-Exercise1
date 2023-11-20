import React from 'react'
import Nav from "../utils/Nav"
import Footer from "../utils/Footer"
import profile from '../images/pic.jpg';
import krishna from '../images/krishna.jpg';
export default function Profile() {
  return (
    <div className="row">
    <Nav></Nav>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br />
<div className="container mt-5 text-center">
    <div className="card mx-auto" style={{ maxWidth: '18rem' }}>
      <div className="text-center">
      <img src={profile} width="100" height="100" className="rounded-circle" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">Aryan Yadav</h5>
        <center>
          <hr className="text-center" style={{ border: 'none', height: '3px', width: '50px', color: 'red', backgroundColor: 'red' }}></hr>
        </center>
        <p className="card-text" style={{ color: '#FFD700' }}>Premium Account</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{ backgroundColor: '#DA70D6', color: 'white' }}><i className="fas fa-envelope"></i> AryanYadav@iiitb.ac.in</li>
          <li className="list-group-item" style={{ backgroundColor: 'white', color: '#DA70D6' }}><i className="fas fa-phone"></i> +91 9140927375</li>
          <li className="list-group-item" style={{ backgroundColor: '#DA70D6', color: 'white' }}><i className="fas fa-map-marker-alt"></i> Bengaluru, India</li>
        </ul>
      </div>
    </div>
  </div>

  



  <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <h1 class="text-center" style={{ color: '#DA70D6' }}>Customer Stories</h1>
  <br/>
  <br/>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="card-wrapper container-sm d-flex  justify-content-around">
      <div class="card  " style={{ width: '18rem' }}>
        <br/>
        <div class="text-center">
          <img src={profile} width="50" height="50" class="rounded-circle" alt="..." />
        </div>
        <div class="text-center">
          <h5 class="card-title">Aryan Yadav</h5>
        <h7 style={{ fontFamily: 'cursive' }}>For Krishna Tshirt</h7>
        </div>
        <br/>
        <img src={krishna} class="card-img-top" alt="..." />
        <div class="card-body text-center">
          
          <button type="button" class="btn" style={{ backgroundColor: '#DA70D6', color: 'white' }}>
            View Product
          </button>
          <br/>
          <br/>
          <p class="card-text" style={{ fontFamily: 'cursive' }}> "Very Good Tshirt. Har Har Mahadev." </p>
          
        </div>
</div>
<div class="card" style={{ width: '18rem' }}>
  
  <br/>
        <div class="text-center">
          <img src={profile} width="50" height="50" class="rounded-circle" alt="..."/>
        </div>
        <div class="text-center">
          <h5 class="card-title">Aryan Yadav</h5>
        <h7 style={{ fontFamily: 'cursive' }}>For Krishna Tshirt</h7>
        </div>
        <br/>
        <img src={krishna} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          
          <button type="button" class="btn" style={{ backgroundColor: '#DA70D6', color: 'white' }}>
            View Product
          </button>
          <br/>
          <br/>
          <p class="card-text" style={{ fontFamily: 'cursive' }}> "Very Good Tshirt. Har Har Mahadev." </p>
    
  </div>
        </div>
        <div class="card" style={{ width: '18rem' }}>
          <br/>
        <div class="text-center">
          <img src={profile} width="50" height="50" class="rounded-circle" alt="..."/>
        </div>
        <div class="text-center">
          <h5 class="card-title">Aryan Yadav</h5>
        <h7 style={{ fontFamily: 'cursive' }}>For Krishna Tshirt</h7>
        </div>
        <br/>
        <img src={krishna} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          
          <button type="button" class="btn" style={{ backgroundColor: '#DA70D6', color: 'white' }}>
            View Product
          </button>
          <br/>
          <br/>
          <p class="card-text" style={{ fontFamily: 'cursive' }}> "Very Good Tshirt. Har Har Mahadev." </p>
            
          </div>
</div>
</div>
    </div>
  <div class="carousel-item">
      <div class="card-wrapper container-sm d-flex   justify-content-around">
      <div class="card  " style={{ width: '18rem' }}>
        <br/>
        <div class="text-center">
          <img src={profile} width="50" height="50" class="rounded-circle" alt="..."/>
        </div>
        <div class="text-center">
          <h5 class="card-title">Aryan Yadav</h5>
        <h7 style={{ fontFamily: 'cursive' }}>For Krishna Tshirt</h7>
        </div>
        <br/>
        <img src={krishna} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          
          <button type="button" class="btn" style={{ backgroundColor: '#DA70D6', color: 'white' }}>
            View Product
          </button>
          <br/>
          <br/>
          <p class="card-text" style={{ fontFamily: 'cursive' }}> "Very Good Tshirt. Har Har Mahadev." </p>
          
        </div>
</div>
<div class="card" style={{ width: '18rem' }}>
  <br/>
        <div class="text-center">
          <img src={profile} width="50" height="50" class="rounded-circle" alt="..."/>
        </div>
        <div class="text-center">
          <h5 class="card-title">Aryan Yadav</h5>
        <h7 style={{ fontFamily: 'cursive' }}>For Krishna Tshirt</h7>
        </div>
        <br/>
        <img src={krishna} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          
          <button type="button" class="btn" style={{ backgroundColor: '#DA70D6', color: 'white' }}>
            View Product
          </button>
          <br/>
          <br/>
          <p class="card-text" style={{ fontFamily: 'cursive' }}> "Very Good Tshirt. Har Har Mahadev." </p>
  
    
  </div>
        </div>
        <div class="card" style={{ width: '18rem' }}>
          <br/>
        <div class="text-center">
          <img src={profile} width="50" height="50" class="rounded-circle" alt="..."/>
        </div>
        <div class="text-center">
          <h5 class="card-title">Aryan Yadav</h5>
        <h7 style={{ fontFamily: 'cursive' }}>For Krishna Tshirt</h7>
        </div>
        <br/>
        <img src={krishna} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          
          <button type="button" class="btn" style={{ backgroundColor: '#DA70D6', color: 'white' }}>
            View Product
          </button>
          <br/>
          <br/>
          <p class="card-text" style={{ fontFamily: 'cursive' }}> "Very Good Tshirt. Har Har Mahadev." </p>
            
          </div>
</div>
    </div>
    </div>
    <div class="carousel-item">
      <div class="card-wrapper container-sm d-flex  justify-content-around">
      <div class="card " style={{ width: '18rem' }}>
        <br/>
        <div class="text-center">
          <img src={profile} width="50" height="50" class="rounded-circle" alt="..."/>
        </div>
        <div class="text-center">
          <h5 class="card-title">Aryan Yadav</h5>
        <h7 style={{ fontFamily: 'cursive' }}>For Krishna Tshirt</h7>
        </div>
        <br/>
        <img src={krishna} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          
          <button type="button" class="btn" style={{ backgroundColor: '#DA70D6', color: 'white' }}>
            View Product
          </button>
          <br/>
          <br/>
          <p class="card-text" style={{ fontFamily: 'cursive' }}> "Very Good Tshirt. Har Har Mahadev." </p>
          
        </div>
</div>
        <div class="card" style={{ width: '18rem' }}>
          <br/>
        <div class="text-center">
          <img src={profile} width="50" height="50" class="rounded-circle" alt="..."/>
        </div>
        <div class="text-center">
          <h5 class="card-title">Aryan Yadav</h5>
        <h7 style={{ fontFamily: 'cursive' }}>For Krishna Tshirt</h7>
        </div>
        <br/>
        <img src={krishna} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          
          <button type="button" class="btn" style={{ backgroundColor: '#DA70D6', color: 'white' }}>
            View Product
          </button>
          <br/>
          <br/>
          <p class="card-text" style={{ fontFamily: 'cursive' }}> "Very Good Tshirt. Har Har Mahadev." </p>
            
          </div>
        </div>
        <div class="card" style={{ width: '18rem' }}>
          <br/>
        <div class="text-center">
          <img src={profile} width="50" height="50" class="rounded-circle" alt="..."/>
        </div>
        <div class="text-center">
          <h5 class="card-title">Aryan Yadav</h5>
        <h7 style={{ fontFamily: 'cursive' }}>For Krishna Tshirt</h7>
        </div>
        <br/>
        <img src={krishna} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          
          <button type="button" class="btn" style={{ backgroundColor: '#DA70D6', color: 'white' }}>
            View Product
          </button>
          <br/>
          <br/>
          <p class="card-text" style={{ fontFamily: 'cursive' }}> "Very Good Tshirt. Har Har Mahadev." </p>
                  </div>
    
  </div>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className="container">
<br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <div className="row justify-content-center align-items-center">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Subscribe For Updates</h2>
          <form action="#" method="post">
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Your Email" required />
              <button className="btn" type="submit" style={{ backgroundColor: '#DA70D6', color: 'white' }}>Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
</div>



<br />




    <Footer></Footer>

</div>
    
  )
}
