import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return(
    <div className="banner">
      <div className="banner-text">
      <Link to="/"><h1>K-reviews</h1></Link>
      <p>Let's talk about dramas</p>
      </div>
    </div>
  )
}
