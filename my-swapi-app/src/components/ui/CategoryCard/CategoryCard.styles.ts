import styled from 'styled-components';
import { colors } from '@/tokens/tokens';

export const CategoryCardContainer = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10);
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-8px);
    border-color: ${colors.primary};
    box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  }
`;

export const IconContainer = styled.div`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 16px;
`;

export const CategoryName = styled.h3`
  color: ${colors.primary};
  margin: 0 0 8px 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CategoryDescription = styled.p`
  color: ${colors.gray[600]};
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
`;
