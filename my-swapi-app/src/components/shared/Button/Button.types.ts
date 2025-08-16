import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "error" | "warning";
  size?: "small" | "medium" | "large";
  width?: string;
  height?: string;
  fullWidth?: boolean;
  customColor?: string;
  children: React.ReactNode;
}