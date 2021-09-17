import { useState } from 'react';

import { CreateCard } from '../CreateCard';
import { ReadyCard } from '../ReadyCard';

import './app.scss';

export const App: React.FC = () => {
  const [name] = useState('Белова Александра Александровна');
  const [selectedCard, setSelectedCard] = useState('');
  const [message, setMessage] = useState('');
  const [pageCreateCard, setPageCreateCard] = useState(true);
  const [pageReadyCard, setPageReadyCard] = useState(false);

  const onClickButtonClose = () => {
    setPageCreateCard(false);
    setPageReadyCard(false);
  }

  const onSubmit = (selectedCard: string, message: string) => {
    setSelectedCard(selectedCard)
    setMessage(message);
    setPageCreateCard(false);
    setPageReadyCard(true);
  };

  const onClickButton = () => alert('Отправлено :)');

  const createCard = pageCreateCard
    ? <CreateCard
      name={name}
      onClickButtonClose={onClickButtonClose}
      onSubmit={onSubmit} />
    : null;

  const readyCard = pageReadyCard
    ? <ReadyCard
      name={name}
      message={message}
      selectedCard={selectedCard}
      onClickButtonClose={onClickButtonClose}
      onClickButton={onClickButton} />
    : null;


  return (
    <div className="app">
      {createCard}
      {readyCard}
    </div>
  );
};
