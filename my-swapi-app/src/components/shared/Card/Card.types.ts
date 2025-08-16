import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: number;
  padding?: string;
  backgroundColor?: string;
  children: React.ReactNode;
}

