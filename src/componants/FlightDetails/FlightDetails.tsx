import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/flightsDetails.scss';

import axios from 'axios';
import { FlightDetailsInterface } from '../../interfaces/flightDetailsInterface';
import FlightItemDetails from './FlightItemDetails';
import { FlightDetailsProps } from '../SearchFlights/FlightItem';

const FlightDetails: React.FC = () => {

  const location = useLocation();
  const [flight, setFlightObject] = useState<FlightDetailsProps>(location.state);
  const [flightDetailsObject, setFlightDetailsObject] = useState<FlightDetailsInterface>(Object);
  const [error, setError] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
  const [show, setShow] = useState<boolean>(false)

  useEffect( () => {
      const fetchData = async () => {

        setShow(false);
        const options = {
          method: 'GET',
          url: 'https://skyscanner50.p.rapidapi.com/api/v1/getFlightDetails',
          params: {
            itineraryId: flight.id,
            legs: JSON.stringify([flight.legs]),
            currency: 'EUR'
          },
          headers: {
            'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
            'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
          }
        };

        console.log(options)
        
        axios.request(options).then(function (response) {
          
          if (!response.data.status) {
              console.log("Erreur : status false");
              setError(true);
              setMessage(response.data.message);
              setShow(false);
              return;
          }

          console.log(response.data);
          setError(false);
          setFlightDetailsObject(response.data.data);
          setShow(true);

        }).catch(function (error) {
          console.error(error);
          setError(true);
          setMessage(error);
          setShow(false);
        });

      }

      setFlightObject(location.state)
      console.log(flight);
      if (flight) {
        fetchData();
      }

    }, [flight]);
      
  return (
      <div className={show ? "searchirportBackGround" : "fw-bold"}>
          <div className='FlightDetailsSize'>

              <div className='p-3'>
                  {
                  error && <p>{`${message}`}</p>
                  }
                  {
                    !error && !show && <div className='fw-bold'>loading...</div>
                  }
                  { 
                      !error && show &&
                      <FlightItemDetails flightDetails={flightDetailsObject}/>
                  }
              </div>

          </div>
      </div>
  );
};
  
export default FlightDetails;
