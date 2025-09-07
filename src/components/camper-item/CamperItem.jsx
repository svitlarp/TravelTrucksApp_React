import css from './CamperItem.module.css';

const CamperItem = ({camper}) => {
    return (
        <div className={css.camperItem}>
            <p>{camper}</p>
        </div>
    );
}


export default CamperItem;