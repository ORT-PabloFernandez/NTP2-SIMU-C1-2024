import React, { useState } from 'react';

export default function Movie(props) {
  const [posterError, setPosterError] = useState(false);

  const handlePosterError = () => {
    setPosterError(true);
  };

  return (
    <li style={{ width: '200px', marginBottom: '20px' }}>
      <div>
        <img
          src={posterError ? "https://i.pinimg.com/564x/b1/99/52/b19952e5b5c86bfa1a909539519f438b.jpg" : props.poster}
          alt={props.title}
          onError={handlePosterError}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.fullplot}</p>
      </div>
    </li>
  );
}

