import React, { useState } from 'react';

import CityInput from './CityInput';
import { Airport } from '../../interfaces/airportInterface';
import axios from 'axios';
import AirportItem from './AirportItem';

const SearchAirport: React.FC = () => {

    const [airports, setAirports] = useState<Airport[]>([]);
    const [error, setError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")
    const [city, setCity] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const handleCitySubmit = (city: string) => {
        
        const fetchData = async () => {

            setAirports([]);
            console.log(city);
            setCity(city);
            setLoading(true);

            const options = {
                method: 'GET',
                url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchAirport',
                params: {query: city},
                headers: {
                'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
                'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
                }
            };

            await axios.request(options).then(function (response) {

                if (!response.data.status) {
                    console.log("Erreur : status false");
                    setError(true);
                    setMessage(response.data.message[0].query);
                    setLoading(false);
                    return;
                }

                console.log(response.data);
                setError(false);
                setAirports(response.data.data);
                setLoading(false);

            }).catch(function (error) {
                console.error(error);
                setError(true);
                setMessage(error);
                setLoading(false);
                setAirports([]);
            });

        };
        fetchData();
    };
  
    return (
        <div className={airports.length > 0 ? "searchirportBackGround": ""}>
            <div className='HeaderChoice'>
                <div className='p-3'>
                    <h1 className='text-center'>Trouver votre Aéroport</h1>
                        <CityInput onCitySubmit={handleCitySubmit} />
                </div>

                <div className='p-3'>
                    {
                    error && <p>{`${message}`}</p>
                    }
                    {
                        airports.length === 0 && city && !loading &&
                        <h2>Aucun Aéroport trouvé pour : <b>{city}</b> </h2>
                    } 
                    {
                        loading && <div>loading...</div>
                    }
                    {
                        airports.length > 0 && !loading &&
                        <h2>Aéroport comportant <b>{city}</b> dans son nom :</h2>
                    }
                    { 
                        airports.length > 0 && !loading &&
                        airports.map(e => <AirportItem key={e.CityId + e.GeoId} airport={e}/>)
                    }
                </div>

            </div>
        </div>
    );
  };
  
export default SearchAirport;
