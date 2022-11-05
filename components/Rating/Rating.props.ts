import { FieldError } from 'react-hook-form';
import { HTMLAttributes, DetailedHTMLProps } from 'react';
export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
  error?: FieldError;
}
