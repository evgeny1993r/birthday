import { ITitleProps } from './Title.types';

import { ButtonClose } from '../ButtonClose';

import './title.scss';

export const Title: React.FC<ITitleProps> = ({ onClickButtonClose }) => (
  <div className="title">
    <h1 className="title__text">Поздравить с Днём рождения</h1>
    <ButtonClose onClickButtonClose={onClickButtonClose} />
  </div>
);
