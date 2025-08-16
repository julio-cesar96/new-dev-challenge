import React from 'react';
import { StackProps } from './Stack.types';
import { StyledStack, Divider, Spacer } from './Stack.styles';

const StackDivider: React.FC<{ 
  color?: string; 
  thickness?: string 
}> = ({ color, thickness }) => (
  <Divider color={color} thickness={thickness} />
);

const StackSpacer: React.FC<{ size?: string }> = ({ size }) => (
  <Spacer size={size} />
);

const StackItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);

export const Stack: React.FC<StackProps> & {
  Divider: typeof StackDivider;
  Spacer: typeof StackSpacer;
  Item: typeof StackItem;
} = ({ children, ...props }) => (
  <StyledStack {...props}>{children}</StyledStack>
);

Stack.Divider = StackDivider;
Stack.Spacer = StackSpacer;
Stack.Item = StackItem;

Stack.displayName = "Stack";
Stack.Divider.displayName = "Stack.Divider";
Stack.Spacer.displayName = "Stack.Spacer";
Stack.Item.displayName = "Stack.Item";