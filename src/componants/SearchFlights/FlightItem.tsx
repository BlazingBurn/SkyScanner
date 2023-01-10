import { Flight } from "../../interfaces/flightInterface";
import { CardBottomSecond, CardTop, CardWrapper, Delivery, Setup } from "../styles";

import star from "../../images/star.png";
import { NavLink } from "react-router-dom";

interface FlightProps {
    flight: Flight,
    details: FlightDetailsProps
}

export interface FlightDetailsProps {
    id: string,
    legs: {
        origin: string,
        destination: string,
        date: string
    }
}

const FlightItem: React.FC<FlightProps> = ({flight, details}) =>{

    // const details: FlightDetailsProps = {id: flight.legs[0].id, legs: {
    //         origin: flight.legs[0].origin.display_code, 
    //         destination: flight.legs[0].destination.display_code,
    //         date: flight.legs[0].departure.split("T")[0]
    // }}

    return(
        <div className="p-3">
            <CardWrapper className="m-auto">
                <NavLink to='/flightDetails' state={details} className={"nav-link"}>
                    <CardTop className="CardTopCustomFlightSearch">
                        {(
                            <>
                            <Setup className="mb-0">
                                <span className="infoDurationFlight">Durée estimée du vol : </span>
                                <br />
                                <b>{Math.floor(flight.totalDuration / 60)} <span>heures</span> {flight.totalDuration % 60} <span>minutes</span></b>
                            </Setup>
                            <Delivery className="mb-0 d-flex justify-content-center align-items-center">
                                    <span className="scoreSize">{flight.score.toFixed(1)}</span>
                                    <img className="imageFlightItem" src={star} alt="starImg" />
                            </Delivery>
                            </>
                        )
                    }
                    </CardTop>
                    <CardBottomSecond className="CardBottomCustomFlightSearch">
                        <p className="mb-0">Le prix de ce vol est de : <br /><b>{flight.price.amount}€</b></p>
                    </CardBottomSecond>
                </NavLink>
            </CardWrapper>
        </div>
    )
  }
  
  export default FlightItem