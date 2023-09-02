import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.loginForm} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.loginLabel}>
        <p>Email:</p>
        <input type="email" name="email" className={css.loginInput} required />
      </label>
      <label className={css.loginLabel}>
        <p>Password:</p>
        <input
          type="password"
          name="password"
          className={css.loginInput}
          required
        />
      </label>
      <button type="submit" className={css.loginButton}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
