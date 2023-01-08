import { NavLink } from "react-router-dom";
import airport from "../images/airport.png";
import airplane from "../images/airplane.png";
import star from "../images/star.png";

const Menu = () => {

    return ( 
       <div className="colorMenu">
            <nav className="navbar navbar-expand navbar-light container">
                {/* <span className="navbar-brand">Menu</span> */}
                
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className={({isActive}) => isActive ? "nav-link activeButtonMenu" : "nav-link buttonClasicMenu"}>
                            <img className="imageMenuButton" src={airport} alt="airportImage" />
                            Recherche Aéroport
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/searchFlights" className={({isActive}) => isActive ? "nav-link activeButtonMenu" : "nav-link buttonClasicMenu"}>
                            <img className="imageMenuButton" src={airplane} alt="airplaneImage" />
                            Recherche Vols
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Favs" className={({isActive}) => isActive ? "nav-link activeButtonMenu" : "nav-link buttonClasicMenu"}>
                            <img className="imageMenuButton" src={star} alt="starImage" />
                            Favoris
                        </NavLink>
                    </li>
                </ul>
            </nav>
       </div> 
     );
}
 
export default Menu;