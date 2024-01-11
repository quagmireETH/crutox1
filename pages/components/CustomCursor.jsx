import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const customCursor = document.getElementById('custom-cursor');

    const moveCursor = (e) => {
      customCursor.style.opacity = 1;
      customCursor.style.top = `${e.clientY}px`;
      customCursor.style.left = `${e.clientX}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div id="custom-cursor"></div>
      <style jsx>{`
        #custom-cursor {
          width: 50px;
          height: 50px;
          border: 2px solid white;
          border-radius: 50%;
          position: fixed;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1000;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        @media (max-width: 1100px) {
          #custom-cursor {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
