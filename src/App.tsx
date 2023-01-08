import React from 'react';
import './App.css';

import SearchAirport from './componants/SearchAirport/SearchAirport';

import Menu from './componants/Menu';
import { Route, Routes } from 'react-router-dom';
import SearchFlights from './componants/SearchFlights/SearchFlights';
import FlightDetails from './componants/FlightDetails/FlightDetails';

const App: React.FC = () => {

  return (
    <div>

      <Menu />

      <div className='backgroundHeaderAiport'>
        <div className='text-center'>
          <h1 className='titleHeader'>Voyage Voyage</h1>
          <h2 className='subTitleHeader font-weight-light'>Trouver votre vol a prix réduit</h2>
        </div>

        <Routes>
          <Route path='/' element={<SearchAirport />} />
          <Route path="/searchFlights" element={<SearchFlights />} />
          <Route path="/flightDetails" element={<FlightDetails />} />
          {/* <Route path="/Favs" element={<Favs />} /> */}
        </Routes>
      </div>


    </div>
  );
};

export default App;
