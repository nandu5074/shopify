import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../data';
import './Card.css';

function Card() {

  return (
    <div>
      <h2 style={{ marginLeft: '25px' }}> Latest Collections</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {data.productData.map((product) => (
          <div className="card" style={{ width: '18rem', maxHeight: '300px', margin: '10px' }} key={product.id}>
            <img className="card-img-top card-img" src={product.img} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                {product.desc}
              </p>
              <a href="/cart" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
