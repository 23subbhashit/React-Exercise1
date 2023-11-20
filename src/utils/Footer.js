import React from 'react'

export default function Footer() {
  return (
      <footer class=" text-light text-center py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p>&copy; 2023 Meesho. All rights reserved.</p>
            </div>
            <div class="col-md-6">
            <a href="#" className="text-light me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </footer>
  )
}
