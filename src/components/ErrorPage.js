// ErrorPage.js
import React from 'react';
import './ErrorPage.css';

function ErrorPage({ status }) {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>{status} </h1>
        <p>Oops! Something went wrong. Please try again later.</p>
        <button onClick={() => window.location.reload()} className="error-button">
          Refresh Page
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
