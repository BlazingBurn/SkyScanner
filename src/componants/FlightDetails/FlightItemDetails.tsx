import { FlightDetailsInterface } from "../../interfaces/flightDetailsInterface";

import star from "../../images/star.png";

interface FlightDetailsProps {
    flightDetails: FlightDetailsInterface
}

const FlightItemDetails: React.FC<FlightDetailsProps> = ({flightDetails}) =>{
   
    const addToFav = () => {
        let fav: any = JSON.parse(localStorage.getItem("fav") || "[]");
        fav[flightDetails.legs[0].id] = flightDetails.legs;
        localStorage.setItem("fav", JSON.stringify(fav));
    }

    return(
        <div className="p-3">
            
            <div>
                <h2>
                    Détails du vol
                </h2>
                <p className="addToFav"><button className="btn-details" onClick={addToFav}>Ajouter aux favoris</button></p>
                <div>
                    {flightDetails.pricingOptions.map((result: any) => (
                        <div key={result.id} className="card">
                           <p>Prix: {result.totalPrice} €</p>
                            <p>Nom: {result.agents[0].name}</p>
                            {result.agents[0].segments.map((segment: any) => (
                                <div key={segment.id}>
                                    <p>Numéro du vol: {segment.flightNumber}</p>
                                    <p>De: {segment.origin.name} - {segment.origin.displayCode} - {segment.origin.city}</p>
                                    <p>Départ le: {new Date(segment.departure).toISOString().replace(/T/, ' ').replace(/\..+/, '')}</p>
                                    <p>À: {segment.destination.name} - {segment.destination.displayCode} - {segment.destination.city}</p>
                                    <p>Arrivé le: {new Date(segment.arrival).toISOString().replace(/T/, ' ').replace(/\..+/, '')}</p>
                                    <p>Durée du vol: {Math.floor(segment.duration / 60)} heures {Math.floor(segment.duration % 60)} minutes</p>
                                </div>
                            ))}
                            <p>Note: {result.agents[0].rating.value.toFixed(1)}/5 ({result.agents[0].rating.count} votes)</p>
                            <p>URL: <a href={result.agents[0].url} target="_blank" rel="noreferrer">lien</a></p>
                        </div>
                    ))}
                </div>
            </div>

            {/* <CardWrapper className="m-auto">
                <CardTop>
                    {(
                        <>
                        <Setup className="mb-0">
                            <span className="infoDurationFlight">Origine du vol : </span>
                            <br />
                            <b><span>{flightDetails.legs[0].origin.name} à {flightDetails.legs[0].origin.city}</span></b>
                            <span className="infoDurationFlight">En direction de : </span>
                            <br />
                            <b><span>{flightDetails.legs[0].destination.name} à {flightDetails.legs[0].destination.city}</span></b>
                        </Setup>
                        <Delivery className="mb-0">
                            <span className="infoDurationFlight">Départ prévue le : </span>
                            <br />
                            <b><span>{flightDetails.legs[0].departure} pour {Math.floor(flightDetails.legs[0].duration / 60)} <span>heures</span> {flightDetails.legs[0].duration % 60} <span>minutes</span></span></b>
                            <div className="d-flex justify-content-center align-items-center">
                                <span className="scoreSize">{flightDetails.pricingOptions[0].agents[0].rating.value.toFixed(1)}</span>
                                <img className="imageFlightItem" src={star} alt="starImg" />
                            </div>
                        </Delivery>
                        </>
                    )
                }
                </CardTop>
                <CardBottomSecond>
                    <p className="mb-0">Le prix de ce vol est de : <br /><b>{flight.price.amount}€</b></p>
                </CardBottomSecond>
            </CardWrapper> */}
        </div>
    )
  }
  
  export default FlightItemDetails