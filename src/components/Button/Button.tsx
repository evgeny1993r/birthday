import { useCallback } from 'react';

import { IButtonProps } from './Button.types';

import './button.scss';

export const Button: React.FC<IButtonProps> = ({ text, onClickButton }) => {
  const handleButtonClick = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onClickButton();
  }, [onClickButton]);
  return (
    <button onClick={handleButtonClick} className="button">{text}</button>
  );
};
