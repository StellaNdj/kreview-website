import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return(
    <footer className="footer">
      <div className="footer-text">
      <Link to="/"><h4>K-reviews</h4></Link>
      </div>
    </footer>
  )
}
