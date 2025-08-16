import styled from "styled-components";
import { colors, breakpoints, fontSizes } from "@/tokens/tokens";
import { TypographyProps } from './Typography.types';

export const StyledTypography = styled.p<TypographyProps>`
  font-size: ${({ variant }) => fontSizes[variant || "body"]};
  color: ${({ color }) => color || colors.black};
  text-align: ${({ align }) => align || "left"};

  @media (max-width: ${breakpoints.md}) {
    font-size: ${({ variant }) =>
      variant === "h1" ? "2rem" :
      variant === "h2" ? "1.75rem" :
      variant === "h3" ? "1.25rem" :
      variant === "body" ? "0.9rem" : "0.75rem"};
  }
`;