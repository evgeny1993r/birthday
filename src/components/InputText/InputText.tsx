import { ChangeEvent, useCallback } from 'react';

import { IInputTextProps } from './InputText.types';

import './input-text.scss';

export const InputText: React.FC<IInputTextProps> = ({ value, countValue, onChangeInputText }) => {
  const handleInputTextChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    onChangeInputText(e);
  }, [onChangeInputText]);

  return (
    <div className="input-text">
      <div className="input-text__container">
        <label className="input-text__label"
          htmlFor="input-text">Напишите пожелание</label>
        <span className="input-text__count-value">{countValue}/375</span>
      </div>
      <textarea
        id="input-text"
        onChange={handleInputTextChange}
        value={value}
        className="input-text__textarea">
      </textarea>
    </div>
  )
};
