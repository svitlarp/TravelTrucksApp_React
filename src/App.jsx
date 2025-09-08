import css from './App.module.css';
import axios  from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import Home from './components/home/Home';
import NotFound from './components/not-found/NotFound';
import CamperCatalog from './components/camper-catalog/CamperCatalog';
import logo from './assets/nav/Logo.png';
import CamperDetailsPage from './pages/camper-details-page/CamperDetailsPage';
import CatalogPage from './pages/catalog-pages/CatalogPage';


function App() {
  const [camperList, setCamperList] = useState([]);
  
  // Fetch API
  useEffect(() => {
    async function fetchImages() {
      try {
        const resp = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
        console.log(resp.data);
        const resultList = resp.data.items;
        const filteredResult = resultList.filter(res => res.gaz === true);
        filteredResult.map(item => console.log(item));
        // setCamperList(prevCamperList => [...prevCamperList, ...resp.data.items]);
        setCamperList(resp.data.items);
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
        {/* <Route path='/catalog' element={<CamperCatalog camperList={camperList} />} /> */}
        <Route path='/catalog' element={<CatalogPage camperList={camperList} />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />}></Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
