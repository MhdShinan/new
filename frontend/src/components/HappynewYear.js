import React, { useState, useEffect } from 'react';

const NewYearCard = () => {
  const [text, setText] = useState('');
  const [showStars, setShowStars] = useState(true);
  const fullText = "✨ Wishing You a Prosperous and Joyful 2025 - R-Tech Solution ✨";

  useEffect(() => {
    let index = 0;
    const typeText = () => {
      const intervalId = setInterval(() => {
        if (index < fullText.length) {
          setText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            index = 0; // Reset the text after delay
            typeText();
          }, 3000);
        }
      }, 100);
      return intervalId;
    };

    const textIntervalId = typeText();
    const starIntervalId = setInterval(() => setShowStars((prev) => !prev), 1000);

    return () => {
      clearInterval(textIntervalId);
      clearInterval(starIntervalId);
    };
  }, []);

  const isSmallScreen = window.innerWidth <= 480;

  const styles = {
    card: {
      width: '100%',
      height: isSmallScreen ? '30px' : '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(90deg, #003366, #005880, #003366)',
      position: 'relative',
      overflow: 'hidden',
    },
    text: {
      color: '#fff',
      fontSize: isSmallScreen ? '12px' : '16px',
      fontWeight: 'bold',
      textShadow: '0 0 5px rgba(255,255,255,0.5)',
      whiteSpace: 'nowrap',
    },
    star: {
      position: 'absolute',
      fontSize: isSmallScreen ? '8px' : '10px',
      color: '#FFD700',
      animation: 'twinkle 1s infinite',
      opacity: 0.8,
    },
    year: {
      position: 'absolute',
      color: '#FFD700',
      fontSize: isSmallScreen ? '14px' : '18px',
      fontWeight: 'bold',
      opacity: 0.3,
      zIndex: 0,
      display: isSmallScreen ? 'none' : 'block',
    },
    cracker: {
      position: 'absolute',
      width: isSmallScreen ? '15px' : '25px',
      objectFit: 'cover',
      pointerEvents: 'none',
      mixBlendMode: 'screen',
      animation: 'float 2s infinite',
    },
  };

  return (
    <div style={styles.card}>
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>

      {/* Background 2025 */}
      <div style={{ ...styles.year, left: '10%' }}>2025</div>
      <div style={{ ...styles.year, right: '10%' }}>2025</div>

      {/* Stars */}
      {showStars && (
        <>
          <span style={{ ...styles.star, top: '5px', left: '5%' }}>⭐</span>
          <span style={{ ...styles.star, top: '15px', left: '25%' }}>✦</span>
          <span style={{ ...styles.star, top: '8px', right: '30%' }}>⭐</span>
          <span style={{ ...styles.star, top: '18px', right: '15%' }}>✦</span>
        </>
      )}

      {/* Fireworks/Crackers */}
      {[...Array(4)].map((_, index) => (
        <img
          key={index}
          src="https://bestanimations.com/media/fireworks/646774028ba-large-white-shell-firework-animated-gif-.gif"
          alt="Fireworks"
          style={{
            ...styles.cracker,
            top: '2px',
            [index % 2 === 0 ? 'left' : 'right']: `${index < 2 ? '2%' : '35%'}`,
            animationDuration: `${2 + (index % 2) * 0.5}s`,
          }}
        />
      ))}

      {/* Running Text */}
      <div>
        <span style={styles.text}>{text}</span>
      </div>
    </div>
  );
};

export default NewYearCard;
