import React, { useState } from 'react';
import '../css/flightsInput.scss';
import moment from 'moment';
import airplane from "../../images/airplane.png";
import airplaneDrop from "../../images/airplaneDrop.png";
import calendar from "../../images/calendar.png";
import people from "../../images/people.png";

interface CityInputProps {
  onFlightsSubmit: (origin: string, destination: string, date: string, passengers: string) => void;
}

const FlightsInput: React.FC<CityInputProps> = (props) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(moment());
  const [passengers, setPassengers] = useState('1');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPassengers(Number(passengers) < 1 ? "1" : passengers);
    if (origin.trim().length > 0 && destination.trim().length > 0 && date.isValid()) {
      props.onFlightsSubmit(origin, destination, date.format("YYYY-MM-DD").toString(), passengers);
    }
  };

  const switchValue = () => {
    if(origin.trim().length > 0 && destination.trim().length > 0) {
      let temp = origin;
      setOrigin(destination);
      setDestination(temp);
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <div className='FlightsFlexTop'>
        
        <div className='CardFlights'>
          <div className='insideFlightsTop'>
            <span className='textFlightsTop'>FROM</span>
            <img className='imageCardFlights' src={airplane} alt="" />
          </div>

          <div className="field field_v2">
            <label className="ha-screen-reader">Origin</label>
            
            <input type="input"
              value={origin}
              onChange={(event) => setOrigin(event.target.value)}
              placeholder="LOND, PARI, MEXA, ...."
              className="field__input" 
              required />
            
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Origin</span>
            </span>
          </div>    
        </div>

        <div className='imageSwitchFlights' onClick={switchValue}>
          {/* <img className='imageSwitchFlights' src={switchPng} alt="" /> */}
        </div>

        <div className='CardFlights'>
          <div className='insideFlightsTop'>
            <span className='textFlightsTop'>TO</span>
            <img className='imageCardFlights' src={airplaneDrop} alt="" />
          </div>

          <div className="field field_v2">
            <label className="ha-screen-reader">Destination</label>
            
            <input type="input"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              placeholder="LOND, PARI, MEXA, ...."
              className="field__input" 
              required />
            
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Destination</span>
            </span>
          </div>    
        </div>
        
      </div>

      <div className='FlightsFlexBottom'>
        
        <div className='CardFlights'>
          <div className='insideFlightsTop'>
            <span className='textFlightsTop'>Departure</span>
            <img className='imageCardFlights' src={calendar} alt="" />
          </div>

          <div className="field field_v2">
            <label className="ha-screen-reader">Date</label>
            
            <input type="date"
              value={date.format("YYYY-MM-DD").toString()}
              onChange={(event) => setDate(moment(event.target.value))}
              placeholder={date.format("YYYY-MM-DD").toString()}
              className="field__input" 
              required />
            
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Date</span>
            </span>
          </div>    
        </div>

        <div className='CardFlights'>
          <div className='insideFlightsTop'>
            <span className='textFlightsTop'>Passengers</span>
            <img className='imageCardFlights' src={people} alt="" />
          </div>

          <div className="field field_v2">
            <label className="ha-screen-reader">Passengers</label>
            
            <input type="number"
              value={Number(passengers) < 0 ? 1 : passengers}
              onChange={(event) => setPassengers(event.target.value)}
              placeholder="Childrens, adults or infants"
              className="field__input" 
              pattern='/^\d+$/' />
            
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Passengers</span>
            </span>
          </div>    
        </div>
        
      </div>

      <div className='divButtonFlightsInput'>
        <button className='buttonFlightsInput' type="submit">Rechercher</button>
      </div>
    </form>
  );
};

export default FlightsInput;
