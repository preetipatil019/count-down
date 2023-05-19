import React from 'react';
import AboutUs from "./AboutUs"
import ContactUs from './ContactUs';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      Header

             <Link to="/about"><AboutUs /></Link>
            <Link to="/contact"><ContactUs /></Link>
    </div>
  );
}

export default Header;
