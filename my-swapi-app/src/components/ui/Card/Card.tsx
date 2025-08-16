import React from 'react';
import { CardProps } from './Card.types';
import { StyledCard, Header, Body, Footer } from './Card.styles';

const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Header>{children}</Header>
);

const CardBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Body>{children}</Body>
);

const CardFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Footer>{children}</Footer>
);

export const Card: React.FC<CardProps> & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
} = ({ children, ...props }) => (
  <StyledCard {...props}>{children}</StyledCard>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

Card.displayName = "Card";
Card.Header.displayName = "Card.Header";
Card.Body.displayName = "Card.Body";
Card.Footer.displayName = "Card.Footer";