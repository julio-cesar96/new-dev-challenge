import styled from "styled-components";
import { colors } from "@/tokens/tokens";
import { CardProps } from './Card.types';

export const StyledCard = styled.div<CardProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || colors.white};
  padding: ${({ padding }) => padding || "16px"};
  border-radius: 8px;
  box-shadow: ${({ elevation }) =>
    elevation === 2 ? "0 2px 6px rgba(0,0,0,0.15)" :
    elevation === 3 ? "0 4px 12px rgba(0,0,0,0.2)" :
    "0 1px 4px rgba(0,0,0,0.1)"};
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid ${colors.gray[200]};
  margin-bottom: 16px;
  padding-bottom: 12px;
`;

export const Body = styled.div`
  flex: 1;
`;

export const Footer = styled.div`
  border-top: 1px solid ${colors.gray[200]};
  margin-top: 16px;
  padding-top: 12px;
`;