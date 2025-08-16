import React from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton, IconWrapper, TextWrapper } from './Button.styles';

const LeftIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <IconWrapper>{children}</IconWrapper>
);

const RightIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <IconWrapper>{children}</IconWrapper>
);

const Text: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <TextWrapper>{children}</TextWrapper>
);

export const Button: React.FC<ButtonProps> & {
  LeftIcon: typeof LeftIcon;
  RightIcon: typeof RightIcon;
  Text: typeof Text;
} = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.LeftIcon = LeftIcon;
Button.RightIcon = RightIcon;
Button.Text = Text;

Button.displayName = "Button";
Button.LeftIcon.displayName = "Button.LeftIcon";
Button.RightIcon.displayName = "Button.RightIcon";
Button.Text.displayName = "Button.Text";