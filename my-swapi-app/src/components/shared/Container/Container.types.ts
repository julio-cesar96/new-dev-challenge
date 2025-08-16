import { HTMLAttributes } from 'react';
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: string;
  justify?: string;
  align?: string;
  wrap?: boolean;
  padding?: string;
  children: React.ReactNode;
}