import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isOpen && <div className="backdrop" onClick={toggle}></div>}
      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isOpen ? 'sidebar-open' : ''}`} style={{ position: 'fixed', width: '100%', top: '0', zIndex: '3', transition: 'transform 0.3s ease-in-out' }}>
        <button className="navbar-toggler" type="button" onClick={toggle} aria-controls="navbarTogglerDemo02" aria-expanded={isOpen} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarTogglerDemo02" style={{ transition: 'transform 0.3s ease-in-out' }}>
          {!isOpen && <NavLink exact to="/" className="navbar-brand"><img style={{ maxHeight: '60px', marginLeft: '20px' }} src='https://www.tayanasolutions.com/wp-content/uploads/2021/04/Shopify-Logo.png' alt='Shopify' /></NavLink>}
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0" style={{ marginLeft: '20px' }}>
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/brands" className="nav-link">Brands</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/sellers" className="nav-link">Sellers</NavLink>
            </li>
          </ul>
          {!isOpen && (
            <form className="form-inline my-2 my-lg-0 d-flex flex-row mx-auto">
              <input style={{ marginRight: '20px' }} className="form-control mr-sm-2" type="search" placeholder="Search for Products" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              <NavLink to="/cart" className="nav-link"><FontAwesomeIcon className='carticon' icon={faCartShopping} fade /></NavLink>
            </form>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
