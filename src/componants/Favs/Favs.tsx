import React, { useEffect, useState } from 'react';

import { Airport } from '../../interfaces/airportInterface';
import { FlightDetailsInterface } from '../../interfaces/flightDetailsInterface';
import '../css/favs.scss';
import FavsItem from './FavsItem';

const Favs: React.FC = () => {

    const [favs, setFavs] = useState<FlightDetailsInterface[]>([]);

    useEffect(()=>{
        const flightDetailsStorage = localStorage.getItem('fav');
        if(flightDetailsStorage){
            setFavs(JSON.parse(flightDetailsStorage) as FlightDetailsInterface[]);
        }
    },[]);

    return (
        <div className={favs.length !== 0 ? "searchirportBackGround" : "fw-bold"}>

            <div className='FavsSize'>
                <h2>Favoris</h2>
                <div className='p-3'>

                    { favs.length === 0 && <p>Aucun favoris</p>}
                    { 
                        favs.length !== 0 &&
                        favs.map(e => <FavsItem key={e.legs[0].id} flightDetails={e}/>)
                    }
                </div>

            </div>
        </div>
    );
  };
  
export default Favs;
