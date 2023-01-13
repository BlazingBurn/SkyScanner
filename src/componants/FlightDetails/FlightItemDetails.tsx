import { FlightDetailsInterface } from "../../interfaces/flightDetailsInterface";

import star from "../../images/star.png";
import { useEffect, useState } from "react";

interface FlightDetailsProps {
    flightDetails: FlightDetailsInterface
}

const FlightItemDetails: React.FC<FlightDetailsProps> = ({flightDetails}) =>{
   
    const [localArray, setLocalArray] = useState<FlightDetailsInterface[]>([]);
    const [isFav, setIsFav] = useState<boolean>(false)

    useEffect(()=>{
        const flightDetailsStorage = localStorage.getItem('fav');
        if(flightDetailsStorage){
            setLocalArray(JSON.parse(flightDetailsStorage) as FlightDetailsInterface[]);
        }
    },[]);

    const addToFav = () => {
        const newArray = [...localArray, flightDetails];
        setLocalArray(newArray);
        localStorage.setItem('fav', JSON.stringify(newArray));
        setIsFav(true);
    }

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
                    Détails du vol
                </h2>
                <p className="addToFav">
                    {
                        isFav &&
                        <button className="btn-details btn-details-color-fav" onClick={removeToFav}>
                        <span className="spanAddFav">Supprimer des favoris ce vol</span>
                        <img className="imageFavsDetails" src={star} alt="starImage" />
                        </button>
                    }
                    {
                        !isFav && 
                        <button className="btn-details btn-details-color-not-fav" onClick={addToFav}>
                        <span className="spanAddFav">Ajouter aux favoris ce vol</span>
                        <img className="imageFavsDetails" src={star} alt="starImage" />
                        </button>
                    }
                </p>
                <div>
                    {flightDetails.pricingOptions.map((result: any) => (
                        <div key={result.id} className="card">
                            <p className="AgenceNameP"> <span>Nom de l'agence</span><br /><span className="AgenceNameSpan">{result.agents[0].name}</span></p>

                            <div className="divInformationFlight">
                                <span className="InformationFlight">Informations concernant ce vol</span>
                                {result.agents[0].segments.map((segment: any) => (
                                    <div key={segment.id} className='InformationFlightDetails'>
                                        <p className="pInformationFlightNumber">Numéro de vol : <span className="InformationFlightNumber">{segment.flightNumber}</span></p>

                                        <div className="flexInformationFlight">
                                            <div className="flexInformationFlightInside">
                                                <p>Départ de l'aéroport <span className="fw-bold">{segment.origin.name}</span>
                                                 <br /> 
                                                 depuis la ville de <span className="fw-bold">{segment.origin.city}</span>
                                                 <br />
                                                 (son code de recherche <span className="fw-bold">{segment.origin.displayCode})</span>
                                                </p>
                                                <p>Prévu à <br /> <span className="fw-bold">{new Date(segment.departure).toISOString().replace(/T/, ' ').replace(/\..+/, '')}</span></p>
                                            </div>
                                            
                                            <div className="flexInformationFlightInside">
                                                <p>Arriver à l'aéroport <span className="fw-bold">{segment.destination.name}</span>
                                                 <br /> 
                                                 de la ville de <span className="fw-bold">{segment.destination.city}</span>
                                                 <br />
                                                 (son code de recherche <span className="fw-bold">{segment.destination.displayCode})</span>
                                                </p>
                                                <p>Prévu pour <br /> <span className="fw-bold">{new Date(segment.arrival).toISOString().replace(/T/, ' ').replace(/\..+/, '')}</span></p>
                                            </div>
                                        </div>

                                        <p>Pour une durée de vol estimé à <span className="fw-bold">{Math.floor(segment.duration / 60)} heures {Math.floor(segment.duration % 60)} minutes</span></p>
                                    </div>
                                ))}
                            </div>

                            <div className="LastInformationFlight">
                                <p>Prix demandé 
                                    <br /> 
                                    <span className="fw-bold">{result.totalPrice} €</span>
                                </p>
                                <p>Cette agence possede une note de 
                                    <br /> 
                                    <span className="fw-bold">{result.agents[0].rating.value.toFixed(1)}/5 ({result.agents[0].rating.count} votes)</span>
                                </p>
                                <p>Voici son URL pour plus d'information 
                                    <br /> 
                                   <a href={result.agents[0].url} target="_blank" rel="noreferrer">lien</a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
  }
  
  export default FlightItemDetails