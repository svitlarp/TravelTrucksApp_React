import css from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={css.notFoundContainer}>
            <h4>Page Not Found</h4>
            <Link to='/'>Home</Link>
        </div>
    );
}

export default NotFound;