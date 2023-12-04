import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css';

const Loading = () => {
  const [progressValue, setProgressValue] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  useEffect(() => {
    const circularProgress = document.querySelector(".circular-progress");

    const progressEndValue = 100;
    const speed = 100;

    const progress = setInterval(() => {
      setProgressValue((prevValue) => {
        const newValue = prevValue + 1;
        circularProgress.style.background = `conic-gradient(#7d2ae8 ${newValue * 3.6}deg, #ededed 0deg)`;

        if (newValue === progressEndValue) {
          clearInterval(progress);
          setLoadingComplete(true);
        }

        return newValue;
      });
    }, speed);

    return () => clearInterval(progress);
  }, []);

  const handleButtonClick = () => {
    // Navigate to the '/print' route using the navigate function
    navigate('/print');
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="circular-progress">
        <span className="progress-value">{`${progressValue}%`}</span>
      </div>

      {loadingComplete && (
        <div className="congrats-container">
          <button onClick={handleButtonClick}>Hoàn tất in</button>
        </div>
      )}
    </div>
  );
};

export default Loading;
