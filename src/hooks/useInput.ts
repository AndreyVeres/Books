import React, { useState } from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return { value, onChange };
};
