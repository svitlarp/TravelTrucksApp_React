import css from './App.module.css';
import Home from './components/home/Home';
import { Routes, Route, NavLink } from "react-router-dom";
import NotFound from './components/not-found/NotFound';
import CamperCatalog from './components/camper-catalog/CamperCatalog';
import logo from './assets/nav/Logo.png';


function App() {

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
        <Route path='/catalog' element={<CamperCatalog />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
