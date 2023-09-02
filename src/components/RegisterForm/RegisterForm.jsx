import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form
      className={css.registerForm}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label className={css.registerLabel}>
        <p>Username:</p>
        <input className={css.registerInput} type="text" name="name" required />
      </label>
      <label className={css.registerLabel}>
        <p>Email:</p>
        <input
          className={css.registerInput}
          type="email"
          name="email"
          required
        />
      </label>
      <label className={css.registerLabel}>
        <p>Password:</p>
        <input
          className={css.registerInput}
          type="password"
          name="password"
          required
        />
      </label>
      <button type="submit" className={css.registerButton}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
