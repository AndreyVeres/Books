import React, { FC, useState } from 'react';

interface IInputProps {
  type?: string;
  id?: string;
}

export const Input: FC<IInputProps> = (props) => {
  const [value, setValue] = useState('');
  return (
    <>
      <input {...props} value={value} onInput={(e) => setValue(e.currentTarget.value)} />
    </>
  );
};
