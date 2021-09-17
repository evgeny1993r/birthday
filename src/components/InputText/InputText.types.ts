import { ChangeEvent } from "react";

export interface IInputTextProps {
  value: string;
  countValue: number;
  onChangeInputText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};
