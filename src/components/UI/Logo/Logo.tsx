import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const Logo: FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <h1 onClick={() => navigate('/')} style={{ color: '#fff', cursor: 'pointer' }}>
      BOOKHUB
    </h1>
  );
};
