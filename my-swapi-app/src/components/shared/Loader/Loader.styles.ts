import styled, { keyframes } from "styled-components";
import { colors } from "@/tokens/tokens";
import { LoaderProps, LoaderSpinnerProps, LoaderTextProps } from './Loader.types';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

export const StyledLoader = styled.div<LoaderProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Spinner = styled.div<LoaderSpinnerProps>`
  border: ${({ thickness }) => thickness || 4}px solid ${colors.gray[200]};
  border-top: ${({ thickness }) => thickness || 4}px solid ${({ color }) => color || colors.primary};
  border-radius: 50%;
  width: ${({ size }) => size || 36}px;
  height: ${({ size }) => size || 36}px;
  animation: ${spin} 1s linear infinite;
`;

export const Dots = styled.div<LoaderSpinnerProps>`
  display: flex;
  gap: 4px;
  
  & > div {
    width: ${({ size }) => (size || 36) / 4}px;
    height: ${({ size }) => (size || 36) / 4}px;
    background-color: ${({ color }) => color || colors.primary};
    border-radius: 50%;
    animation: ${pulse} 1.4s ease-in-out infinite both;
    
    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
    &:nth-child(3) { animation-delay: 0s; }
  }
`;

export const Bar = styled.div<LoaderSpinnerProps>`
  width: ${({ size }) => size || 36}px;
  height: ${({ size }) => (size || 36) / 4}px;
  background-color: ${({ color }) => color || colors.primary};
  border-radius: ${({ size }) => (size || 36) / 8}px;
  animation: ${pulse} 1.2s ease-in-out infinite;
`;

export const Text = styled.div<LoaderTextProps>`
  color: ${({ color }) => color || colors.gray[600]};
  font-size: ${({ size }) => size || "14px"};
  font-weight: 500;
`;

export const Overlay = styled.div<{ blur?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: ${({ blur }) => blur ? "blur(2px)" : "none"};
`;