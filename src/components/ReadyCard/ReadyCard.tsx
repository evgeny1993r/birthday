import { IReadyCardProps } from './ReadyCard.types';

import { Title } from '../Title';
import { Button } from '../Button';

import './ready-card.scss';

export const ReadyCard: React.FC<IReadyCardProps> = ({
  name,
  message,
  selectedCard,
  onClickButtonClose,
  onClickButton,
}) => {

  return (
    <div className="ready-card">
      <Title onClickButtonClose={onClickButtonClose} />
      <div className="ready-card__container">
        <div className="ready-card__card"
          style={{ backgroundImage: `url(${selectedCard})` }}></div>
        <div className="ready-card__content">
          <div className="ready-card__name">
            <span className="ready-card__help-text">Кому</span>
            <span className="ready-card__name-text">{name}</span>
          </div>
          <div className="ready-card__message">
            <span className="ready-card__help-text">Пожелание</span>
            <p className="ready-card__message-text">{message}</p>
          </div>
        </div>
      </div>
      <div className="ready-card__container-button">
        <Button text="Отправить" onClickButton={onClickButton} />
        <span className="ready-card__text">Именинник увидит поздравление в личном профиле</span>
      </div>
    </div>
  );
};
