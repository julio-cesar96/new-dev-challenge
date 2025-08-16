export interface ContainerProps {
  direction?: "row" | "column";
  gap?: string;
  justify?: string;
  align?: string;
  wrap?: boolean;
  padding?: string;
  children: React.ReactNode;
}