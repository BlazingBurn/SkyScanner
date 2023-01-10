import { Airport } from "../../interfaces/airportInterface"
import { CardBottomSecond, CardTop, CardWrapper, Delivery, Setup } from "../styles";

interface AirportProps {
    airport: Airport
}

const AirportItem: React.FC<AirportProps> = ({airport}) =>{
   
    return(
        <div className="p-3">
            <CardWrapper>
                <CardTop>
                    {(
                        <>
                        <Setup>
                            <span>Nom de la ville : </span>
                            <br />
                            {airport.CityName.length > 0 ? airport.CityName : "Nom de ville non renseigné"}
                        </Setup>
                        <Delivery>
                            <span>Nom du Pays : </span>
                            <br />
                            {airport.CountryName.length > 0 ? airport.CountryName : "Nom du pays non rensigné"}
                        </Delivery>
                        </>
                    )
                }
                </CardTop>
                <CardBottomSecond>
                    <p>Code pour recherches de vols : <br /><b>{airport.CityId.length > 0 ? airport.CityId : "Aucun code renseigné"}</b></p>
                    <p>Nom de l'emplacement : <br /><b>{airport.PlaceName.length > 0 ? airport.PlaceName : "Aucun emplacement renseigné"}</b></p>
                </CardBottomSecond>
            </CardWrapper>
        </div>
    )
  }
  
  export default AirportItem