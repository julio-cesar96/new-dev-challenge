import styled from "styled-components";
import { StackProps } from './Stack.types';

export const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  gap: ${({ gap }) => gap || "16px"};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  align-items: ${({ align }) => align || "stretch"};
  justify-content: ${({ justify }) => justify || "flex-start"};
`;

export const Divider = styled.div<{ color?: string; thickness?: string }>`
  width: 100%;
  height: ${({ thickness }) => thickness || "1px"};
  background-color: ${({ color }) => color || "#e0e0e0"};
  margin: 8px 0;
`;

export const Spacer = styled.div<{ size?: string }>`
  width: ${({ size }) => size || "16px"};
  height: ${({ size }) => size || "16px"};
  flex-shrink: 0;
`;