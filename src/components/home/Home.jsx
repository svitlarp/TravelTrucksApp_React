import css from './Home.module.css';

const Home = () => {
    return (
        <div className={css.home}>
            <div className={css.homeTitle}>
                <h1 className={css.homeTitleTextHeader}>Campers of your dreams</h1>
                <h2 className={css.homeTitleText}>You can find everything you want in our catalog</h2>
                <button className={css.homeBtn} type='button'>View now</button>
            </div>
        </div>
    );
}

export default Home;