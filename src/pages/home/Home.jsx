import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './Home.module.css';

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Welcome to Phonebook</title>
        </Helmet>
      </HelmetProvider>
      <div className={css.welcome}>
        <h1>Welcome to Phonebook</h1>
        <p className={css.homeText}>
          Please login or register to use our application ⬆️
        </p>
      </div>
    </>
  );
};

export default Home;
