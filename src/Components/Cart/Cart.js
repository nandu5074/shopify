import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const CartComponent = () => {
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#d2c9ff' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">3 items</h6>
                      </div>
                      <hr className="my-4"/>

                      {/* Repeat the following block for each item in the cart */}
                      <CartItem
                        imgSrc="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                        category="Shirt"
                        itemName="Cotton T-shirt"
                        price="€ 44.00"
                      />

                      <hr className="my-4"/>

                      {/* Repeat the above block for each item */}

                      <div className="pt-5">
                      <h6 className="mb-0">
    <Link to="/" className="text-body">
      <i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop
    </Link>
  </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4"/>

                      {/* Add the summary content here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CartItem = ({ imgSrc, category, itemName, price }) => {
  return (
    <div className="row mb-4 d-flex justify-content-between align-items-center">
      <div className="col-md-2 col-lg-2 col-xl-2">
        <img src={imgSrc} className="img-fluid rounded-3" alt={itemName} />
      </div>
      <div className="col-md-3 col-lg-3 col-xl-3">
        <h6 className="text-muted">{category}</h6>
        <h6 className="text-black mb-0">{itemName}</h6>
      </div>
      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
        <button className="btn btn-link px-2" onClick={() => console.log('Decrease quantity')}>
          <i className="fas fa-minus"></i>
        </button>

        <input id="form1" min="0" name="quantity" value="1" type="number" className="form-control form-control-sm" />

        <button className="btn btn-link px-2" onClick={() => console.log('Increase quantity')}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h6 className="mb-0">{price}</h6>
      </div>
      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
        <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
      </div>
    </div>
  );
};

export default CartComponent;

