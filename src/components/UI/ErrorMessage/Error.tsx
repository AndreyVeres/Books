import React, { FC } from 'react';

import './error.scss';

interface IErrorMessageProps {
  children: React.ReactNode;
}

export const ErrorMessage: FC<IErrorMessageProps> = ({ children }): JSX.Element => {
  return <div className="error">{children}</div>;
};
