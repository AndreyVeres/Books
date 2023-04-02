import { useAppSelector } from 'hooks/useAppSelector';
import React from 'react';

export const ProfilePage = (): JSX.Element => {
  const { name } = useAppSelector((state) => state.userReducer.currentUser);

  return (
    <div style={{ color: 'red' }}>
      <p>{name}</p>
    </div>
  );
};
