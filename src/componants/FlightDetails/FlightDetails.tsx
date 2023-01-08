import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Flight } from '../../interfaces/flightInterface';
import { FlightDetailsInterface } from '../../interfaces/flightDetailsInterface';
import FlightItemDetails from './FlightItemDetails';

const FlightDetails: React.FC = (props: any) => {

    const [flight] = useState<Flight>(props);
    const [flightDetailsObject, setFlightDetailsObject] = useState<FlightDetailsInterface>(Object);
    const [error, setError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

    useEffect( () => {
        const fetchData = async () => {

            const options = {
              method: 'GET',
              url: 'https://skyscanner50.p.rapidapi.com/api/v1/getFlightDetails',
              params: {
                itineraryId: flight.id,
                legs: flight.legs
              },
              headers: {
                'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
                'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
              }
            };
              
            axios.request(options).then(function (response) {

              if (!response.data.status) {
                  console.log("Erreur : status false");
                  setError(true);
                  setMessage(response.data.message[0].query);
                  return;
              }

              console.log(response.data);
              setError(false);
              setFlightDetailsObject(response.data.data);

            }).catch(function (error) {
              console.error(error);
              setError(true);
              setMessage(error);
            });

        }
        fetchData();
      }, []);
        
    return (
        <div className='searchirportBackGround'>
            <div className='searchFlightsSize'>

                <div className='p-3'>
                    {
                    error && <p>{`${message}`}</p>
                    }
                    { 
                        !error &&
                        <FlightItemDetails flightDetails={flightDetailsObject}/>
                    }
                </div>

            </div>
        </div>
    );
};
  
export default FlightDetails;
