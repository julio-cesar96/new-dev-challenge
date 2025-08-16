import styled from 'styled-components';
import { colors } from '@/tokens/tokens';

export const ItemTitle = styled.h2`
  color: ${colors.primary};
  margin: 0 0 16px 0;
  font-size: 1.8rem;
  font-weight: 700;
`;

export const AttributeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-top: 16px;
`;

export const AttributeItem = styled.div`
  background: ${colors.gray[100]};
  padding: 12px;
  border-radius: 8px;
  border-left: 4px solid ${colors.primary};
`;

export const AttributeLabel = styled.span`
  font-weight: 600;
  color: ${colors.gray[700]};
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const AttributeValue = styled.div`
  color: ${colors.gray[900]};
  font-size: 1rem;
  margin-top: 4px;
`;