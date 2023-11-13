import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the Dog API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Update state with the fetched image URL
        setDogImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
        setLoading(false); 
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
}

export default App;
