import { useState, useCallback } from 'react';
import { ICardListProps } from './CardList.types';

import { Card } from '../Card';
import CardOne from '../../assets/images/card-one.png';
import CardTwo from '../../assets/images/card-two.png';
import CardThree from '../../assets/images/card-three.png';
import CardFour from '../../assets/images/card-four.png';
import CardFive from '../../assets/images/card-five.png';
import CardSix from '../../assets/images/card-six.png';

import './card-list.scss';

export const CardList: React.FC<ICardListProps> = ({ onSelectedCard }) => {
  const [cardList, setCardList] = useState([
    { backgroundUrl: CardOne, id: 1, isSelected: false },
    { backgroundUrl: CardTwo, id: 2, isSelected: false },
    { backgroundUrl: CardThree, id: 3, isSelected: false },
    { backgroundUrl: CardFour, id: 4, isSelected: false },
    { backgroundUrl: CardFive, id: 5, isSelected: false },
    { backgroundUrl: CardSix, id: 6, isSelected: false },
  ]);

  const handleCardSelected = useCallback((card: string) => {
    onSelectedCard(card);
  }, [onSelectedCard]);

  const onClickCard = (id: number) => {
    const newCardList = cardList.map((el) =>
      el.isSelected === true
        ? { ...el, isSelected: false }
        : el
    );
    const idx = newCardList.findIndex((card) => id === card.id);
    const newCard = { ...newCardList[idx], isSelected: !newCardList[idx].isSelected };
    setCardList([
      ...newCardList.slice(0, idx),
      newCard,
      ...newCardList.slice(idx + 1),
    ]);

    handleCardSelected(newCard.backgroundUrl);
  };

  return (
    <div className="card-list">
      <span className="card-list__help-text">Выберите открытку</span>
      <div className="card-list__container">
        {cardList.map(({ backgroundUrl, id, isSelected }) => (
          <Card backgroundUrl={backgroundUrl}
            isSelected={isSelected}
            key={id}
            id={id}
            onClickCard={onClickCard}
          />
        ))}
      </div>
    </div>
  );
};
