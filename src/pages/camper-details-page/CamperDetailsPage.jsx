import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import css from './CamperDetailsPage.module.css';
import icons from '../../assets/icons.svg';


const CamperDetailsPage = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);

  useEffect(() => {
    async function fetchCamper() {
      const res = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`);
      console.log(res.data);
      setCamper(res.data);
    }

    fetchCamper();
  }, [id]);

  return (
    <> {
      camper && (
        <div className={css.camperDetails}>
          {/* Title */}
        <div className={css.camperTitle}>
          <div className={css.title}>
            <button className="titleBtn" type="button">{camper.name}</button>
          </div>
          <div className={css.details}>
            <div className={css.detailsReviews}>
              <button className={css.detailsReviewsBtn}>
                <svg width="16" height="16">
                        <use href={`${icons}#icon-icon-rating`}></use>
                    </svg>
                    {/* TODO: count reviews total*/}
                <p>{camper.rating}</p>
              </button>
              <button className={css.detailsMapBtn}>
                <svg width="16" height="16">
                    <use href={`${icons}#icon-icon-map`}></use>
                </svg>
                <p>{ camper.location}</p>
              </button>
            </div>
            <p className={css.detailsText}>€ {Number(camper.price).toFixed(2)}</p>
          </div>
          </div>
          {/* Gallery */}
          
          {/* Text */}
          <p className={css.camperDescription}>{camper.description}</p>
          {/* Tabs */}
          {/* Details */}
          {/* Form */}

        </div>
      )
    }
    </>
            
  );
}

export default CamperDetailsPage;

