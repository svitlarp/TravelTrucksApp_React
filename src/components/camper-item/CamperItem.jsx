import css from './CamperItem.module.css';
import icons from '../../assets/icons.svg';
import { Link, useParams } from "react-router-dom";


const CamperItem = ({camperCard}) => {
    return (
        <div className={css.camperCard}>
            <div className={css.content}>
                <img className={css.camperCardContentImg}
                    src={camperCard.gallery[0].original}
                    alt={camperCard.name}
                    title={camperCard.name}
                />
                <div className={css.camperCardContentInfo} >
                    <div className={css.textContainer}>
                        <div className={css.textContainerTitle}>
                            <h2>{camperCard.name}</h2>
                            <div className={css.price}>
                                <h2 className={css.priceNum}>€ {Number(camperCard.price).toFixed(2)}</h2>
                                <svg width="26" height="24">
                                    <use href={`${icons}#icon-icon-heart`}></use>
                                </svg>
                            </div>
                        </div>
                        <div className={css.textContainerDetails}>
                            <div className={css.reviews}>
                                <svg width="16" height="16">
                                    <use href={`${icons}#icon-icon-rating`}></use>
                                </svg>
                                {/* TODO: count reviews total*/}
                                <button type="text">{camperCard.rating}</button>
                            </div>
                            <div className={css.location}>
                                <svg width="16" height="16">
                                    <use href={`${icons}#icon-icon-map`}></use>
                                </svg>
                                <p>{ camperCard.location}</p>
                            </div>
                        </div>
                    </div>
                    <p className={css.supportingText}>{camperCard.description}</p>
                    <div className={css.badgesContainer}>
                        <p>{camperCard.transmission}, {camperCard.engine}, kitchen: {camperCard.kitchen}, AC: {camperCard.AC} </p>
                    </div>
                    <Link to={`/catalog/${camperCard.id}`}>
                        <button type='button' className={css.camperCardShowMoreBtn}>Show more</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CamperItem;