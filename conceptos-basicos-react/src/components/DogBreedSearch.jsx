import { useState, useEffect } from 'react';
import './DogBreedSearch.css';

const DogBreedSearch = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        // Realizar 10 peticiones simultáneas
        const responses = await Promise.all(
          Array(10).fill().map(() => 
            fetch('https://dog.ceo/api/breeds/image/random')
          )
        );
        
        const data = await Promise.all(responses.map(res => res.json()));
        setDogs(data.map(item => item.message));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dogs:', error);
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  return (
    <div className="dog-container">
      <h2>Razas de perros aleatorias</h2>
      
      {loading ? (
        <div className="loading">
          <img 
            src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" 
            alt="Cargando..." 
          />
          <p>Cargando imágenes...</p>
        </div>
      ) : (
        <div className="dog-grid">
          {dogs.map((dog, index) => (
            <div key={index} className="dog-card">
              <img src={dog} alt={`Perro ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DogBreedSearch;