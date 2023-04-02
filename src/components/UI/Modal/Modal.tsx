import React from 'react';

import './modal.scss';

interface IModapProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export default function Modal({ active, setActive, children }: IModapProps) {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
