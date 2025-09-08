import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import css from './CamperDetailsPage.module.css';
import icons from '../../assets/icons.svg';


const CamperDetailsPage = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  });


  useEffect(() => {
    async function fetchCamper() {
      const res = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`);
      console.log(res.data);
      setCamper(res.data);
    }

    fetchCamper();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData); //Send to API
  }

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
          <ul className={css.gallery}>
            {camper.gallery.map((img, index) => (
              <li key={index} className={css.galleryItem}>
                <img 
                  className={css.galleryImg}
                  src={img.original}
                  alt={camper.name} />
              </li>
            ))}
          </ul>


          {/* Text */}
          <p className={css.camperDescription}>{camper.description}</p>

          {/* Tabs */}
          
          {/* Details */}
          {/* Form */}
          <div className={css.camperDetailsForm}>
            <div className={css.formTitle}>
              <h3>Book your campervan now</h3>
              <p className={css.formText}>Stay connected! We are always ready to help you.</p>
            </div>
            {/* <div className={css.inputs}> */}
              <form className={css.inputs} onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder="Name*" value={formData.name} onChange={handleChange} required/>

                <input type="email" name="Email" id="email" placeholder="Email*" value={formData.bookingDate} onChange={handleChange} required />

                <input type="date" name="Booking Date" id="bookingDate" placeholder="Booking Date*" value={formData.bookingDate} onChange={handleChange} required />

                <textarea name="comment" id="comment" placeholder="Comment" value={formData.comment} onChange={handleChange} />
                
                <button className={css.formSendBtn} type="button">Send</button>
              </form>
            {/* </div> */}
          </div>
        </div>
      )
    }
    </>
            
  );
}

export default CamperDetailsPage;

