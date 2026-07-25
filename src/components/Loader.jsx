import React from 'react';

const Loader = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <style>
        {`
          .spinner {
            width: 60px;
            height: 60px;
            border: 5px solid rgba(255, 204, 0, 0.3); /* Light primary color */
            border-radius: 50%;
            border-top-color: var(--primary-color);
            animation: spin 1s ease-in-out infinite;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
          
          .loading-text {
            color: var(--secondary-color);
            font-weight: 600;
            font-size: 1.2rem;
            letter-spacing: 1px;
            animation: pulse 1.5s ease-in-out infinite;
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
      <div className="spinner"></div>
      <div className="loading-text">Loading Data...</div>
    </div>
  );
};

export default Loader;
