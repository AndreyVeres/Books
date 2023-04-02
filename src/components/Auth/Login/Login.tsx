import { useActions } from 'hooks/useActions';
import { useInput } from 'hooks/useInput';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import '../form.scss';

export const Login: FC = (): JSX.Element => {
  const { login } = useActions();
  const username = useInput('');
  const password = useInput('');

  const loginHandler = (): void => {
    login(username.value, password.value);
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        loginHandler();
      }}
    >
      <div className="form__item">
        <label htmlFor="name">Name</label>
        <input {...username} type="text" id="name" />
      </div>

      <div className="form__item">
        <label htmlFor="Password">Password</label>
        <input {...password} type="text" id="Password" />
      </div>

      <button type="submit">Войти</button>
      <Link to={'/register'}>Зарегестрироваться</Link>
    </form>
  );
};
