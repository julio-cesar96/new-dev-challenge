export interface LoaderProps {
  size?: number;
  color?: string;
  thickness?: number;
  children?: React.ReactNode;
}

export interface LoaderSpinnerProps {
  size?: number;
  color?: string;
  thickness?: number;
}

export interface LoaderTextProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
}
