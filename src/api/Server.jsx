import { useState, useEffect } from 'react';

const cities = [
  { name: 'Seoul', url: 'https://api.weatherapi.com/v1/current.json?key=606e74206b584b82a3c140658230509&q=Seoul' },
  { name: 'Boulder', url: 'https://api.weatherapi.com/v1/current.json?key=606e74206b584b82a3c140658230509&q=Boulder' },
  { name: 'Miami', url: 'https://api.weatherapi.com/v1/current.json?key=606e74206b584b82a3c140658230509&q=Miami' },
  { name: 'Nashville', url: 'https://api.weatherapi.com/v1/current.json?key=606e74206b584b82a3c140658230509&q=Nashville' }
];

function Server() {
  const [temps, setTemps] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = cities.map(city => fetch(city.url));
        const responses = await Promise.all(requests);
        const data = await Promise.all(responses.map(response => response.json()));

        const tempsData = {};
        data.forEach((json, index) => {
          tempsData[cities[index].name] = json.current.temp_f;
        });

        setTemps(tempsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='server-main'>
      <div className='temps'>
        {Object.keys(temps).map(city => (
          <div key={city} className='temp-bubble'>
            <span className='temp-text'>{city} Temp Now:</span><br /><br /> <span className='temp-temp'>{temps[city]} F</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Server;
