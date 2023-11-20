import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import Nav from '../utils/Nav';
import Footer from '../utils/Footer';
import productsData from '../data/products.json';
import { Link } from 'react-router-dom'; 

const Home = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const imageStyles = {
    width: '200px', 
    height: '200px', 
  };

  return (
    <div className="row">
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container p-5">
        <h1> Men's Tshirt </h1>
        <span> Showing 21-40 out of 10000 products </span>
        <br />
        <br />
        <div className="row">
          <div className="col-4">
            <div className="dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Sort By: Relevance
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Relevance</Dropdown.Item>
                  <Dropdown.Item href="#">Ratings</Dropdown.Item>
                  <Dropdown.Item href="#">Price (High to Low)</Dropdown.Item>
                  <Dropdown.Item href="#">Price (Low to High)</Dropdown.Item>
                  <Dropdown.Item href="#">New Arrivals</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <br />
            <br />
            <div className="container border te">
              <br />
              <div className="element1" style={{ paddingLeft: '40px' }}>
                FILTERS<br />
                1000+ Products<br />
              </div>
              <hr />
              
              <div className="element-container">
      <div className="element2" style={{ paddingLeft: '40px' }}>
        <h2 style={{ color: '#DA70D6' }}>Fabric </h2>
        <br />
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Acrylic
          </label>
        </div>
        <br />
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
          <label className="form-check-label" htmlFor="flexCheckDefault2">
            Bamboo
          </label>
        </div>
        <br />
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
          <label className="form-check-label" htmlFor="flexCheckDefault3">
            Chambray
          </label>
        </div>
        <br />
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
          <label className="form-check-label" htmlFor="flexCheckDefault4">
            Denim
          </label>
        </div>
      </div>
      <br />
      <hr />
      <div className="element3" style={{ paddingLeft: '40px' }}>
        <h2 style={{ color: '#DA70D6' }}>Color </h2>
        <br />
        <div className="row">
          <div className="col">
          <button
                id="demo1"
                type="button"
                className={`btn border rounded-pill`}
                
              >
              Black
            </button>
            <button
              id="demo2"
              type="button"
              className={`btn border rounded-pill`}
            >
              Blue
            </button>
            <button
              id="demo3"
              type="button"
              className={`btn border rounded-pill`}
            >
              Brown
            </button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <button
              id="demo4"
              type="button"
              className={`btn border rounded-pill`}
            >
              Gray
            </button>
            <button
              id="demo5"
              type="button"
              className={`btn border rounded-pill`}
            >
              Red
            </button>
            <button
              id="demo6"
              type="button"
              className={`btn border rounded-pill`}
            >
              Yellow
            </button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <button
              id="demo7"
              type="button"
              className={`btn border rounded-pill`}
            >
              Orange
            </button>
            <button
              id="demo8"
              type="button"
              className={`btn border rounded-pill`}
            >
              Khaki
            </button>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
            </div>
          </div>

          <div className="col-8">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {products.map((product) => (
                <div className="col" key={product.id}>
                  <div className="card">
                    <img src={product.imagePath} className="card-img-top"  style={imageStyles} alt={product.name} />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      <h5>
                        ₹ {product.price} <span style={{ fontFamily: 'cursive' }}>onwards</span>
                      </h5>
                      <button type="button" className="btn btn-success position-relative">
                        Free Delivery
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {product.discount}% Off
                        </span>
                      </button>
                      <br />
                      <hr />
                      <div className="row">
                        <div className="col">
                          <button type="button" className="btn btn-primary rounded-circle">
                            {product.rating} <i className="fas fa-star"></i>
                          </button>
                        </div>
                        <div className="col">
                        <Link to={`/product/${product.id}`}>
                            <button type="button" className="btn btn-warning">Buy</button>
                        </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
