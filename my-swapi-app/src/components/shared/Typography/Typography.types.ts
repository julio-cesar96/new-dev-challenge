export interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "body" | "caption";
  color?: string;
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}