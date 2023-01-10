import React, { useState } from 'react';
import '../css/cityInput.scss';

interface CityInputProps {
  onCitySubmit: (city: string) => void;
}

const CityInput: React.FC<CityInputProps> = (props) => {
  const [city, setCity] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (city.trim().length > 0) {
      props.onCitySubmit(city);
      setCity('');
    }
  };

  return (
    <form className='text-center' onSubmit={handleSubmit}>
      <label className='customLabelCityInput'>
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="London, Paris, Mexico, ...."
          className='customInputCity'
        />
      </label>
      <button className='buttonCityInput' type="submit">Rechercher</button>
    </form>
  );
};

export default CityInput;
