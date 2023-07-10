import React from 'react';
import { MyButton, Logo } from 'components';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'hooks/useAppSelector';
import { useActions } from 'hooks/useActions';

import './navbar.scss';

export const NavBar = (): JSX.Element => {
  const { isAuth, currentUser } = useAppSelector((state) => state.userReducer);
  const { logaut } = useActions();
  return (
    <header className="header">
      <Logo />
      {/* {isAuth ? (
        <nav>
          <ul>
            <Link to={'/profile'}>{currentUser?.name}</Link>
            <li>
              <MyButton onClick={logaut}>Выйти</MyButton>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <Link to={'/login'}>Войти</Link>
            </li>
            <li>
              <Link to={'/register'}>Зарегистрироватсья</Link>
            </li>
          </ul>
        </nav>
      )} */}
    </header>
  );
};
