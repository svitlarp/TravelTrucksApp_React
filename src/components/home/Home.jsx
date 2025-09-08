import css from './Home.module.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className={css.home}>
            <div className={css.homeTitle}>
                <h1 className={css.homeTitleTextHeader}>Campers of your dreams</h1>
                <h2 className={css.homeTitleText}>You can find everything you want in our catalog</h2>
                <Link to="/catalog">
                    <button className={css.homeBtn} type='button'>View now</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;