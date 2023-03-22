import React, { FC } from 'react';

import './myButton.scss';

interface IMyButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const MyButton: FC<IMyButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
