import css from './App.module.css';
import axios  from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import Home from './components/home/Home';
import NotFound from './components/not-found/NotFound';
import CamperCatalog from './components/camper-catalog/CamperCatalog';
import logo from './assets/nav/Logo.png';

const results = [
    {
      id: "1a",
      name: "Road Bear C 23-25",
      price: 10000,
      rating: 4,
      location: "Ukraine, Kyiv",
      description: "Embadventures, promising comfort, style, and the freedom to explore at your own pace.",
      transmission: "automatic",
      engine: "diesel",
      AC: true,
      bathroom: true,
      kitchen: true,
      TV: true,
      radio: true,
      refrigerator: true,
      microwave: true,
      gas: false,
      water: true,
      gallery: {
        thumb: "https://ftp.goit.study/img/campers-test-task/1-1.webp",
        original: "https://ftp.goit.study/img/campers-test-task/1-1.webp"
        }
    },
    {
      id: "2b",
      name: "Kuga Camper",
      price: 8000,
      rating: 3,
      location: "Kyiv, Ukraine",
      description: "The pictures shown here are example vehicles of the respective...",
      transmission: "automatic",
      engine: "petrol",
      AC: false,
      bathroom: false,
      kitchen: false,
      TV: false,
      radio: false,
      refrigerator: false,
      microwave: false,
      gas: true,
      water: false,
      gallery: {
        thumb: "https://ftp.goit.study/img/campers-test-task/1-1.webp",
        original: "https://ftp.goit.study/img/campers-test-task/1-1.webp"
      }
    }
  ]

function App() {
  const [camperList, setCamperList] = useState(results);
  
  // Fetch API
  // useEffect(() => {
  //   async function fetchImages() {
  //     try {
  //       const resp = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
  //       console.log(resp.data);
  //       const resultList = resp.data.items;
  //       resultList.map(item => console.log(item));
  //       setCamperList(prevCamperList => [...prevCamperList, ...resp.data.items]);
  //     } catch (err) {
  //       console.error("Error fetching images:", err.message);
  //     }
  //   }
  //   fetchImages();
  // }, []);
  


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
