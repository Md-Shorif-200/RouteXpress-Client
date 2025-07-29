import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlinks = () => {
      const navLinks = (
    <>
      <li className="text-base font-semibold capitalize mx-3 py-2 lg:py-0 cursor-pointer">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-base font-semibold capitalize mx-3 py-2 lg:py-0 cursor-pointer">
        <NavLink to="/book-percel">Book Percel</NavLink>
      </li>
      <li className="text-base font-semibold capitalize mx-3 py-2 lg:py-0 cursor-pointer">
        <NavLink to="/track-percel">Track Percel</NavLink>
      </li>
      <li className="text-base font-semibold capitalize mx-3 py-2 lg:py-0 cursor-pointer">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

    return   navLinks;
};

export default Navlinks;