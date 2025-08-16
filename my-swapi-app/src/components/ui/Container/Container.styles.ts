import styled from "styled-components";
import { ContainerProps } from './Container.types';

export const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  gap: ${({ gap }) => gap || "16px"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "stretch"};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  padding: ${({ padding }) => padding || "0"};
`;

export const Item = styled.div`
  flex: none; /* Por padrão, itens não crescem */
`;

export const FlexItem = styled.div<{ flex?: string | number }>`
  flex: ${({ flex }) => flex || 1};
`;