export interface ICardProps {
  backgroundUrl: string;
  isSelected: boolean;
  id: number;
  onClickCard: (id: number) => void;
};
