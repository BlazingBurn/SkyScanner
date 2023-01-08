import { FlightDetailsInterface } from "../../interfaces/flightDetailsInterface";
import { CardBottomSecond, CardTop, CardWrapper, Delivery, Setup } from "../styles";

import star from "../../images/star.png";

interface FlightDetailsProps {
    flightDetails: FlightDetailsInterface
}

const FlightItemDetails: React.FC<FlightDetailsProps> = ({flightDetails}) =>{
   
    return(
        <div className="p-3">
            
            Origine du vol

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