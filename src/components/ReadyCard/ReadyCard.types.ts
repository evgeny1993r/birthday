export interface IReadyCardProps {
  name: string;
  message: string;
  selectedCard: string;
  onClickButtonClose: () => void;
  onClickButton: () => void;
};
