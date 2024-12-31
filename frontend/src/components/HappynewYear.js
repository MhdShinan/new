import React, { useState, useEffect } from 'react';

const NewYearCard = () => {
  const [text, setText] = useState('');
  const [showStars, setShowStars] = useState(true);
  const fullText = "✨ Wishing You a Prosperous and Joyful 2025 - R-tech Solution ✨";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => {
        if (index < fullText.length) {
          index++;
          return fullText.slice(0, index);
        }
        index = 0;
        return '';
      });
    }, 150);

    // Toggle stars visibility
    const starInterval = setInterval(() => {
      setShowStars(prev => !prev);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(starInterval);
    };
  }, []);

  const styles = {
    card: {
      width: '100%',
      height: '35px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(90deg, #003366, #005880, #003366)',
      overflow: 'hidden',
      position: 'relative',
    },
    textContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 2,
    },
    text: {
      color: '#fff',
      fontSize: '16px',
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
      position: 'absolute',
      textShadow: '0 0 5px rgba(255,255,255,0.5)',
    },
    cracker: {
      position: 'absolute',
      width: '25px',
      height: '25px',
      objectFit: 'cover',
      pointerEvents: 'none',
      mixBlendMode: 'screen',
      zIndex: 1,
    },
    star: {
      position: 'absolute',
      fontSize: '10px',
      color: '#FFD700',
      animation: 'twinkle 1s infinite',
      opacity: 0.8,
      zIndex: 1,
    },
    year: {
      position: 'absolute',
      color: '#FFD700',
      fontSize: '18px',
      fontWeight: 'bold',
      opacity: 0.3,
      zIndex: 0,
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
            0% { transform: translateY(0px); }
            50% { transform: translateY(-2px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
      
      {/* Background 2025 */}
      <div style={{...styles.year, left: '10%'}}>2025</div>
      <div style={{...styles.year, right: '10%'}}>2025</div>

      {/* Stars */}
      {showStars && (
        <>
          <span style={{...styles.star, top: '5px', left: '5%'}}>⭐</span>
          <span style={{...styles.star, top: '15px', left: '25%'}}>✦</span>
          <span style={{...styles.star, top: '8px', right: '30%'}}>⭐</span>
          <span style={{...styles.star, top: '18px', right: '15%'}}>✦</span>
        </>
      )}

      {/* Fireworks/Crackers */}
      <img 
        src="https://bestanimations.com/media/fireworks/646774028ba-large-white-shell-firework-animated-gif-.gif"
        alt="Fireworks" 
        style={{...styles.cracker, top: '2px', left: '2%', animation: 'float 2s infinite'}} 
      />
      <img 
        src="https://bestanimations.com/media/fireworks/646774028ba-large-white-shell-firework-animated-gif-.gif"
        alt="Fireworks" 
        style={{...styles.cracker, top: '2px', left: '35%', animation: 'float 2.5s infinite'}} 
      />
      <img 
        src="https://bestanimations.com/media/fireworks/646774028ba-large-white-shell-firework-animated-gif-.gif"
        alt="Fireworks" 
        style={{...styles.cracker, top: '2px', right: '35%', animation: 'float 2s infinite'}} 
      />
      <img 
        src="https://bestanimations.com/media/fireworks/646774028ba-large-white-shell-firework-animated-gif-.gif"
        alt="Fireworks" 
        style={{...styles.cracker, top: '2px', right: '2%', animation: 'float 2.5s infinite'}} 
      />

      {/* Running Text */}
      <div style={styles.textContainer}>
        <div style={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default NewYearCard;

