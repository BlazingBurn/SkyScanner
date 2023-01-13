import { FlightDetailsInterface } from "../../interfaces/flightDetailsInterface";

import star from "../../images/star.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface FavsProps {
    flightDetails: FlightDetailsInterface
}

const FavsItem: React.FC<FavsProps> = ({flightDetails}) =>{
   
    const [localArray, setLocalArray] = useState<FlightDetailsInterface[]>([]);
    const [isFav, setIsFav] = useState<boolean>(false)

    useEffect(()=>{
        const flightDetailsStorage = localStorage.getItem('fav');
        if(flightDetailsStorage){
            setLocalArray(JSON.parse(flightDetailsStorage) as FlightDetailsInterface[]);
        }
    },[]);

    const removeToFav = () => {
        const newArray = localArray.filter((value:FlightDetailsInterface)  => value !== flightDetails);
        setLocalArray(newArray);
        localStorage.setItem('fav', JSON.stringify(newArray));
        setIsFav(false);
    }

    return(
        <div className="p-3">
            
            <div>
                <h2 className="titleFlightDetails">
                    Détails du favoris en direction de {flightDetails.legs[0].destination.city}
                </h2>
                <p className="addToFav">
                    {
                        isFav &&
                        <button className="btn-details btn-details-color-fav" onClick={removeToFav}>
                        <span className="spanAddFav">Supprimer des favoris ce vol</span>
                        <img className="imageFavsDetails" src={star} alt="starImage" />
                        </button>
                    }
                </p>

                <div key={flightDetails.legs[0].id} className="card">
                    <p>Départ de l'aéroport <span className="fw-bold">{flightDetails.legs[0].origin.name}</span></p>
                    <p>Arrivé à l'aéroport <span className="fw-bold">{flightDetails.legs[0].destination.name}</span></p>
                    <p>Date: {new Date(flightDetails.legs[0].departure).toISOString().split('T')[0]}</p>
                    {/* <NavLink to='/flightDetails' state={{id: flightDetails.legs[0].id, legs: {
                        origin: flightDetails.legs[0].origin, 
                        destination: flightDetails.legs[0].destination, 
                        date: flightDetails.legs[0].departure}}} className={"nav-link"}>
                        <p>Détails</p>
                    </NavLink> */}
                </div>

            </div>
        </div>
    )
  }
  
  export default FavsItem