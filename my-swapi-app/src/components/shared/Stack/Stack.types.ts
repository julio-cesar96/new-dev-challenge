export interface StackProps {
  direction?: "row" | "column";
  gap?: string;
  wrap?: boolean;
  align?: string;
  justify?: string;
  children: React.ReactNode;
}