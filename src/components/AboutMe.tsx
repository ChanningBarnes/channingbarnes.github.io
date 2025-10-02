import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section>
      <h2>About Me</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p>Hi, I'm Channing Barnes. Welcome to my personal webpage!</p>
          <p>“I can do all this through him who gives me strength.” – Philippians 4:13</p>
        </div>
        <img 
          src="imgs/CroppedShot.png" 
          alt="Channing Barnes headshot" 
          style={{ 
            width: '150px', 
            height: '150px', 
            borderRadius: '50%', 
            objectFit: 'cover', 
            marginLeft: '20px' // Add some space between the text and the image
          }} 
        />
      </div>
    </section>
  );
}

export default AboutMe;
