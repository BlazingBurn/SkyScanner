import { Flight } from "../../interfaces/flightInterface";
import { CardBottomSecond, CardTop, CardWrapper, Delivery, Setup } from "../styles";

import star from "../../images/star.png";
import { NavLink } from "react-router-dom";

interface FlightProps {
    flight: Flight
}

const FlightItem: React.FC<FlightProps> = ({flight}) =>{

    return(
        <div className="p-3">
            <CardWrapper className="m-auto">
                <NavLink to="/flightDetails" state={flight} className={"nav-link"}>
                    <CardTop>
                        {(
                            <>
                            <Setup className="mb-0">
                                <span className="infoDurationFlight">Durée estimée du vol : </span>
                                <br />
                                <b>{Math.floor(flight.totalDuration / 60)} <span>heures</span> {flight.totalDuration % 60} <span>minutes</span></b>
                            </Setup>
                            <Delivery className="mb-0">
                                <div className="d-flex justify-content-center align-items-center">
                                    <span className="scoreSize">{flight.score.toFixed(1)}</span>
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
                </NavLink>
            </CardWrapper>
        </div>
    )
  }
  
  export default FlightItem