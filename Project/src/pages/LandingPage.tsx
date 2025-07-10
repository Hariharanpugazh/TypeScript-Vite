import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to the Landing Page</h1>
      <p> Hi Students !</p>
      <Link to="/buttons">
            <button>
                Go to Button Page
            </button>
      </Link>
    </div>
  );
};

export default LandingPage;
