import React, { useState } from 'react';

import axios from 'axios';
import FlightsInput from './FlightsInput';
import { Flight, LegsRename } from '../../interfaces/flightInterface';
import FlightItem from './FlightItem';

const SearchFlights: React.FC = () => {

    const [flights, setFlights] = useState<Flight[]>([]);
    const [error, setError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")
    const [legsInfo, setLegsInfo] = useState<LegsRename>({origin: "", destination: "", date:""})

    const handleFlightsSubmit = (origin: string, destination: string, date: string, passengers: string) => {
      
      const fetchData = async () => {

          setFlights([]);
          console.log("origin : " + origin + ", destination : " + destination + ", date : " + date + "et passengers : " + passengers);

          setLegsInfo({origin: origin, destination: destination, date: date});

          const options = {
              method: 'GET',
              url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
              params: {
                origin: origin,
                destination: destination,
                date: date,
                adults: passengers,
                currency: 'EUR'
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
                  setMessage(response.data.message);
                  return;
              }

                console.log(response.data);
                setError(false);

                // response.data.data.map((f: Flight) => 
                //   f.legs.map(l => transformObject(l))
                // );

                setFlights(response.data.data);

            }).catch(function (error) {
              console.error(error);
              setError(true);
              setMessage(error);
              setFlights([]);
            });

      }
      fetchData();
        
    };
  
    return (
        <div className={flights.length > 0 ? "searchirportBackGround" : ""}>
            <div className='searchFlightsSize'>
                <div className='p-3'>
                        <FlightsInput onFlightsSubmit={handleFlightsSubmit} />
                </div>

                <div className='p-3'>
                    {
                    error && <p>{`${message}`}</p>
                    }
                    { 
                        flights.length > 0 &&
                        flights.sort((a, b) => a.price.amount - b.price.amount).map(e => 
                          <FlightItem key={e.id} flight={e} details={{id: e.legs[0].id, legs: legsInfo}}/>)
                    }
                </div>

            </div>
        </div>
    );
  };
  
export default SearchFlights;
