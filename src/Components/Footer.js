import React from 'react'

export const Footer = () => {
    return (
<footer className="text-center text-lg-start bg-light text-muted">
  <section className="d-flex justify-content-left justify-content-lg-left p-4 border-bottom">

    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" className="px-3  text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className=" px-3 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
     <a href="" className="me-5 px3 text-reset">
     <i class="fab fa-whatsapp"></i>
     </a>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
          <i class="fas fa-regular fa-paw"></i> <p>S&G Pet Shop</p>
          </h6>
          <p>
          We love pets, and we believe loving pets makes us better people. That's one of the many reasons we do our job for Pets -because they will do anything for us.
          </p>
        </div>
     
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
           <p> Site Map</p>
          </h6>
          <p>
            <a href="/" className="text-reset">Home</a>
          </p>
          <p>
            <a href="aboutus" className="text-reset">About Us</a>
          </p>
          <p>
            <a href="login" className="text-reset">Login</a>
          </p>
          <p>
            <a href="signup" className="text-reset">Sign Up</a>
          </p>
        </div>
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> Miami, FL 33135, US</p>
          <p>
            <i className="fas fa-envelope me-3 mx-1"></i>
             info@s&gpetshop.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    <p>© 2022 Copyright:</p>
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">S&GPetShop.com</a>
  </div>
 
</footer>
)
}