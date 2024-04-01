import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return(
    <footer className="footer">
      <div className="footer-text">
      <Link to="/"><h4>K-reviews</h4></Link>
      <p>Disclaimer: The synopsis & images are all from My Drama List. No copyright infringement intended.</p>
      </div>
    </footer>
  )
}
