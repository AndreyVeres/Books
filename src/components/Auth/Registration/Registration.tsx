import { useInput } from 'hooks/useInput';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import '../form.scss';
export const Registration: FC = (): JSX.Element => {
  const username = useInput('');
  const password = useInput('');

  return (
    <form className="form">
      <div className="form__item">
        <label htmlFor="name">Name</label>
        <input {...username} type="text" id="name" />
      </div>

      <div className="form__item">
        <label htmlFor="Password">Password</label>
        <input {...password} type="text" id="Password" />
      </div>

      <div className="form__item">
        <label htmlFor="Password">Password</label>
        <input type="text" id="Password" />
      </div>

      <button type="submit">Зарегестрироваться</button>
      <Link to={'/login'}>Уже есть аккаунт ?</Link>
    </form>
  );
};
