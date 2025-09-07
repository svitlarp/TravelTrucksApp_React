import css from './App.module.css';
import axios  from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import Home from './components/home/Home';
import NotFound from './components/not-found/NotFound';
import CamperCatalog from './components/camper-catalog/CamperCatalog';
import logo from './assets/nav/Logo.png';



function App() {
  const [camperList, setCamperList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  // https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers
  // Fetch API
  useEffect(() => { 
    async function fetchImages() {    
      try {
        const resp = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
        console.log(resp.data);
        setCamperList(prevCamperList=> [...prevCamperList, ...resp.data.items]) 
      } catch (err) {
        console.error("Error fetching images:", err.message);
      } 
    }
    fetchImages();
  }, []);

  return (
    <>
      <nav className={css.nav}>
        <NavLink to='/' className={css.navLink}>
          <img src={logo} alt="TravelTrucks Logo" className={css.logoImg} />
        </NavLink>
        <div className={css.navMenu}>
          <NavLink to='/' className={css.navLink}>Home</NavLink>
          <NavLink to='/catalog' className={css.navLink}>Catalog</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<CamperCatalog camperList={camperList} />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
