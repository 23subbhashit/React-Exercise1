import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from "../utils/Nav";
import Footer from "../utils/Footer";
import productsData from '../data/productdetail.json';
import '../css/styles3.css';

export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [newReview, setNewReview] = useState({
    user: '',
    title: '',
    comment: '',
    rating: 0,
  });
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cartData.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      cartData[existingProductIndex].quantity += quantity;
    } else {
      cartData.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        description: product.description, 
        imagePath: product.imagePath,
      });
    }
    localStorage.setItem('cart', JSON.stringify(cartData));

    alert('Product added to cart!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const updatedProductDetails = [...productsData];
    const productIndex = updatedProductDetails.findIndex((p) => String(p.id) === productId);

    if (productIndex !== -1) {
      updatedProductDetails[productIndex].reviews.push({
        id: new Date().getTime(),
        ...newReview,
      });

      
      setProduct(updatedProductDetails[productIndex]);
      setNewReview({
        user: '',
        title: '',
        comment: '',
        rating: 0,
      });
    }
  };

  useEffect(() => {
    const selectedProduct = productsData.find((p) => String(p.id) === productId);
    setProduct(selectedProduct);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row">
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container my-5 p-5">
      <div className="row">
        <div className="col-md-5">
          <div className="main-img">
            <img className="img-fluid" src={product.imagePath} alt="ProductS" />
            <div className="row my-3 previews">
              <div className="col-md-3">
                <img className="w-100" src={product.imagePath} alt="Sale" />
              </div>
              <div className="col-md-3">
                <img className="w-100" src={product.imagePath} alt="Sale" />
              </div>
              <div className="col-md-3">
                <img className="w-100" src={product.imagePath} alt="Sale" />
              </div>
              <div className="col-md-3">
                <img className="w-100" src={product.imagePath} alt="Sale" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="main-description px-2">
            <div className="category text-bold" style={{ color: 'purple' }}>
              Category: {product.category}
            </div>
            <div className="product-title text-bold my-3">
            {product.name}
            </div>

            <div className="price-area my-4">
              <p className="old-price mb-1">
                <del>₹ {product.price} </del>{' '}
                <span className="old-price-discount text-danger">({product.discount}% off)</span>
              </p>
              <p className="new-price text-bold mb-1">₹ {(product.price * (1-(product.discount/100)))} </p>
              <h4>
                Rating : {product.rating} {Array.from({ length: 5 }, (_, index) => {
                const starValue = index + 1;
                const starClass = starValue <= Math.floor(product.rating)
                                    ? 'fas fa-star'
                                    : starValue - 0.5 <= product.rating
                                    ? 'fas fa-star-half-alt'
                                    : 'far fa-star';

                                    return <i key={index} className={starClass} style={{ color: 'violet' }}></i>;
                })}
              </h4>

              <p className="text-secondary mb-1">
                (Additional tax may apply on checkout)
              </p>
            </div>

            <div className="row">
      {/* ... (existing code) */}

      <div className="buttons d-flex my-5">
        <div className="block">
          <button className="shadow btn custom-btn" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>

        <div className="block quantity">
          <input
            type="number"
            className="form-control"
            id="cart_quantity"
            value={quantity}
            min="1"
            max="5"
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          />
        </div>
      </div>

      {/* ... (existing code) */}
    </div>
          </div>

          <div className="product-details my-4">
            <p className="details-title text-color mb-1">Product Details</p>
            <p className="description">
              {product.description}
            </p>
          </div>

          <div className="row questions bg-light p-3">
            <div className="col-md-1 icon">
              <i className="fas fa-question-circle" style={{ color: 'purple' }}></i>
            </div>
            <div className="col-md-11 text">
              Have a question about our products at Meesho? Feel free to contact our
              representatives via live chat or email.
            </div>
          </div>

          <div className="delivery my-4">
            <p className="font-weight-bold mb-0">
              <span>
                <i className="fas fa-map-marker" style={{ color: 'purple' }}></i>{' '}
                <b>Delivery done in 3 days from date of purchase</b>{' '}
              </span>
            </p>
            <p className="text-secondary">Order now to get this product delivery</p>
          </div>
          <div className="delivery-options my-4">
            <p className="font-weight-bold mb-0">
              <span>
                <i className="fas fa-map-marker" style={{ color: 'purple' }}></i>{' '}
                <b>Delivery options</b>{' '}
              </span>
            </p>
            <p className="text-secondary">View delivery options here</p>
          </div>
        </div>
      </div>

      <div className="container similar-products my-4">
        <p className="display-5 text-center" style={{ color: '#DA70D6' }}>
          Product Reviews
        </p>
        
        <div className="row">
        
        {product.reviews.map((review) => (      
          <div className="col-md-3">
            <div className="similar-product text-center">

                  <div class="card" style={{width: "18rem;"}}>
                      <div class="card-body">
                          <h5 class="card-title" style = {{ fontFamily: 'cursive',color : "#DA70D6"}}>{review.user}</h5>
                          <div className="row">
                            <div className="col">
                              <h6 class="card-subtitle p-2 text-muted">{review.title}</h6>
                              
                            </div>
                            <div className="col">
                            <button type="button" className="btn btn-primary rounded-circle">
                            {review.rating} <i className="fas fa-star"></i>
                            </button>
                            </div>
                          </div>
                          
                          <hr />
                          <p class="card-text">{review.comment}</p>
                          
                      </div>
                  </div>
              <br />
            </div>
          </div>
          ))}



        </div>
      </div>

      




      <div className="row">
      {/* ... (existing code) */}

      <div className="container similar-products my-4">
        {/* ... (existing code) */}
        <p className="display-5 text-center" style={{ color: '#DA70D6' }}>
          Add a Review
        </p>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleReviewSubmit} className="row g-3">
              <div className="col-md-6">
                <label htmlFor="user" className="form-label">
                  User:
                </label>
                <input
                  type="text"
                  name="user"
                  value={newReview.user}
                  onChange={handleInputChange}
                  className="form-control"
                  id="user"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="title" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  name="title"
                  value={newReview.title}
                  onChange={handleInputChange}
                  className="form-control"
                  id="title"
                  required
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="comment" className="form-label">
                  Comment:
                </label>
                <textarea
                  name="comment"
                  value={newReview.comment}
                  onChange={handleInputChange}
                  className="form-control"
                  id="comment"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="rating" className="form-label">
                  Rating:
                </label>
                <input
                  type="number"
                  name="rating"
                  value={newReview.rating}
                  onChange={handleInputChange}
                  min="1"
                  max="5"
                  className="form-control"
                  id="rating"
                  required
                />
              </div>
              <div className="col-md-6 d-flex align-items-end">
                <button type="submit" className="btn btn-primary">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* ... (existing code) */}
      </div>

      {/* ... (existing code) */}
    </div>




      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Subscribe For Updates</h2>
                <form action="#" method="post">
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" required />
                    <button className="btn" type="submit" style={{ backgroundColor: '#DA70D6', color: 'white' }}>
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}
