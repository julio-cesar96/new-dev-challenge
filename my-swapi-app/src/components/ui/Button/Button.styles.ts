import styled from 'styled-components';
import { colors } from '@/tokens/tokens';
import { ButtonProps } from './Button.types';

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${({ size, height }) =>
    height ? height : 
    size === "large" ? "16px 32px" :
    size === "medium" ? "12px 24px" :
    "8px 16px"};
  width: ${({ width, fullWidth }) => (fullWidth ? "100%" : width || "auto")};
  background-color: ${({ variant, customColor }) =>
    customColor ? customColor :
    variant === "secondary" ? colors.secondary :
    variant === "success" ? colors.success :
    variant === "error" ? colors.error :
    variant === "warning" ? colors.warning :
    colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const IconWrapper = styled.span`
  display: inline-flex;
`;

export const TextWrapper = styled.span`
  display: inline-flex;
`;