import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => () => {
    navigate(path);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Navigation Buttons</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '200px', margin: 'auto' }}>
        <button onClick={handleNavigate('/')}>Home</button>
        <button onClick={handleNavigate('/page1')}>Page 1</button>
        <button onClick={handleNavigate('/page2')}>Page 2</button>
        <button onClick={handleNavigate('/page3')}>Page 3</button>
        <button onClick={handleNavigate('/page4')}>Page 4</button>
      </div>
    </div>
  );
};

export default ButtonPage;
