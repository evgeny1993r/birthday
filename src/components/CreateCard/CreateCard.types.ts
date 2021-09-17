export interface ICreateCardProps {
  name: string;
  onClickButtonClose: () => void;
  onSubmit: (selectedCard: string, message: string) => void;
};
