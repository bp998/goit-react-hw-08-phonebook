import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.userMenu}>
      <p className={css.userMenuName}>
        <b>Welcome, {user.name}</b>
      </p>
      <button
        type="button"
        className={css.userMenuLogOut}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
