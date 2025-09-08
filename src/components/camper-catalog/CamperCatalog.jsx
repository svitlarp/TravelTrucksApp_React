import CamperItem from '../camper-item/CamperItem';
import css from './CamperCatalog.module.css';


const CamperCatalog = ({camperList}) => {
    return (
            <ul className={css.camperCatalog}>
                {camperList.map(camper => (
                    <li className={css.CamperCatalogListItem} key={camper.id}>
                        <CamperItem camperCard={camper} />
                    </li>
                ))}
            </ul>
    );
}


export default CamperCatalog;