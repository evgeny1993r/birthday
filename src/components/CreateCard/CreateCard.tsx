import { ChangeEvent, useCallback, useState } from 'react';

import { ICreateCardProps } from './CreateCard.types';

import { Title } from '../Title';
import { CardList } from '../CardList';
import { InputText } from '../InputText';
import { Button } from '../Button';

import './create-card.scss';

export const CreateCard: React.FC<ICreateCardProps> = ({
  name,
  onClickButtonClose,
  onSubmit,
}) => {
  const [selectedCard, setSelectedCard] = useState('');
  const [countValue, setCountValue] = useState(0);
  const [message, setMessage] = useState('');

  const onChangeInputText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value.length > 375) return;
    setMessage(e.currentTarget.value);
    setCountValue(e.currentTarget.value.length);
  }

  const onSelectedCard = (selectedCard: string) => setSelectedCard(selectedCard);

  const handleButtonSubmit = useCallback(() => {
    onSubmit(selectedCard, message);
  }, [onSubmit, selectedCard, message]);

  return (
    <form className="create-card">
      <Title onClickButtonClose={onClickButtonClose} />
      <div className="create-card__name">
        <span className="create-card__help-text">Кого</span>
        <h2 className="create-card__name-text">{name}</h2>
      </div>
      <CardList onSelectedCard={onSelectedCard} />
      <InputText value={message} countValue={countValue} onChangeInputText={onChangeInputText} />
      <Button text="Далее" onClickButton={handleButtonSubmit} />
    </form>
  );
};
