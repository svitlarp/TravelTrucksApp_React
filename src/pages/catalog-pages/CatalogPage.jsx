import { useState } from "react";
import CamperCatalog from "../../components/camper-catalog/CamperCatalog";
import css from './CatalogPage.module.css';


const CatalogPage = ({ camperList }) => {
    const [query, setQuery] = useState('');
    
    const filteredCampers = camperList.filter(camper => {
        const camperLocation = camper.location.toLowerCase();
        const search = query.toLowerCase().trim();
        return camperLocation.includes(search);
    });

    // const filteredCampers = camperList.filter(camper => camper.location.toLowerCase().includes(query.toLowerCase().trim()));

    return (
        <div className={css.catalogPage}>
            <div className={css.filters}>
                {/* Filter Location */}
                <form className={css.filterLocation}>
                    <label className="filterLocationLabel" htmlFor="filterLocation">Location</label>
                    <input
                        className={css.filterLocationInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Kyiv, Ukraine"
                        name="filterLocation"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)} 
                    />
                </form>
                {/* Vehicle Equipment */}
                {/* Vehicle Equipment */}
            </div>
            <div className={css.CamperList}>
                <CamperCatalog camperList={filteredCampers} />
            </div>
        </div>
    )
}

export default CatalogPage;