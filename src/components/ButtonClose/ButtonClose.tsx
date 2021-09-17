import { useCallback } from 'react';

import { IButtonCloseProps } from './ButtonClose.types';

import Close from '../../assets/images/close.svg';

import './button-close.scss';

export const ButtonClose: React.FC<IButtonCloseProps> = ({ onClickButtonClose }) => {
  const handleButtonCloseClick = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onClickButtonClose();
  }, [onClickButtonClose]);

  return (
    <button className="button-close"
      onClick={handleButtonCloseClick}>
      <img src={Close} alt="close" />
    </button>
  );
};
