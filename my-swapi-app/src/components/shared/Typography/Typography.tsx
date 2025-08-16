import React from 'react';
import { TypographyProps } from './Typography.types';
import { StyledTypography } from './Typography.styles';

const H1: React.FC<Omit<TypographyProps, 'variant'>> = ({ children, ...props }) => (
  <StyledTypography as="h1" variant="h1" {...props}>{children}</StyledTypography>
);

const H2: React.FC<Omit<TypographyProps, 'variant'>> = ({ children, ...props }) => (
  <StyledTypography as="h2" variant="h2" {...props}>{children}</StyledTypography>
);

const H3: React.FC<Omit<TypographyProps, 'variant'>> = ({ children, ...props }) => (
  <StyledTypography as="h3" variant="h3" {...props}>{children}</StyledTypography>
);

const Body: React.FC<Omit<TypographyProps, 'variant'>> = ({ children, ...props }) => (
  <StyledTypography as="p" variant="body" {...props}>{children}</StyledTypography>
);

const Caption: React.FC<Omit<TypographyProps, 'variant'>> = ({ children, ...props }) => (
  <StyledTypography as="span" variant="caption" {...props}>{children}</StyledTypography>
);

export const Typography: React.FC<TypographyProps> & {
  H1: typeof H1;
  H2: typeof H2;
  H3: typeof H3;
  Body: typeof Body;
  Caption: typeof Caption;
} = ({ variant = "body", color, align = "left", children }) => {
  return (
    <StyledTypography variant={variant} color={color} align={align}>
      {children}
    </StyledTypography>
  );
};

Typography.H1 = H1;
Typography.H2 = H2;
Typography.H3 = H3;
Typography.Body = Body;
Typography.Caption = Caption;

Typography.displayName = "Typography";
Typography.H1.displayName = "Typography.H1";
Typography.H2.displayName = "Typography.H2";
Typography.H3.displayName = "Typography.H3";
Typography.Body.displayName = "Typography.Body";
Typography.Caption.displayName = "Typography.Caption";