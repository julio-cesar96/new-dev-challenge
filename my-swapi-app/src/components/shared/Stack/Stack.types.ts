import { HTMLAttributes } from 'react';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: string;
  wrap?: boolean;
  align?: string;
  justify?: string;
  children: React.ReactNode;
}