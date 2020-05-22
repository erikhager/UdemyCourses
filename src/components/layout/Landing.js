import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Seatmap</h1>
          <p className='lead'>Find a free seat in your open workspace</p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-light'>
              Sign Up
            </Link>

            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
