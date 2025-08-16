import React from 'react';
import { ContainerProps } from './Container.types';
import { StyledContainer, Item, FlexItem } from './Container.styles';

const ContainerItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Item>{children}</Item>
);

const ContainerFlexItem: React.FC<{ 
  flex?: string | number; 
  children: React.ReactNode 
}> = ({ children, flex }) => (
  <FlexItem flex={flex}>{children}</FlexItem>
);

export const Container: React.FC<ContainerProps> & {
  Item: typeof ContainerItem;
  FlexItem: typeof ContainerFlexItem;
} = ({ children, ...props }) => (
  <StyledContainer {...props}>{children}</StyledContainer>
);

Container.Item = ContainerItem;
Container.FlexItem = ContainerFlexItem;

Container.displayName = "Container";
Container.Item.displayName = "Container.Item";
Container.FlexItem.displayName = "Container.FlexItem";