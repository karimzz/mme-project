import React, { useState, useEffect } from 'react';
import "./FadeCoponent.css"

const Fade = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`fade ${isVisible ? 'visible' : 'hidden'}`}>
      {children}
    </div>
  );
};

export default Fade;