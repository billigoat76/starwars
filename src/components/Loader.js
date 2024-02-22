// DNALoader.js
import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="dna-loader">
      <div className="strand">
        <div className="nucleotide"></div>
        <div className="nucleotide"></div>
        <div className="nucleotide"></div>
      </div>
      <div className="strand">
        <div className="nucleotide"></div>
        <div className="nucleotide"></div>
        <div className="nucleotide"></div>
      </div>
    </div>
  );
}

export default Loader;
