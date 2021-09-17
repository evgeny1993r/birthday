import { useCallback } from 'react';

import { ICardProps } from './Card.types';

import Tick from '../../assets/images/tick.svg';

import './card.scss';

export const Card: React.FC<ICardProps> = ({ backgroundUrl, id, isSelected, onClickCard }) => {
  const classes = !isSelected ? 'card' : 'card card_selected';
  const background = !isSelected
    ? `url(${backgroundUrl}`
    : `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${backgroundUrl})`;
  const tick = isSelected ? <img src={Tick} alt="tick" /> : null;

  const handleClickCard = useCallback(() => {
    onClickCard(id);
  }, [onClickCard, id]);

  return (
    <div className={classes}
      style={{ backgroundImage: background }}
      onClick={handleClickCard}>
        {tick}
    </div>
  );
};
