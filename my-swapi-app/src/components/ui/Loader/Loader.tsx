import React from 'react';
import { 
  LoaderProps, 
  LoaderSpinnerProps, 
  LoaderTextProps 
} from './Loader.types';
import { 
  StyledLoader, 
  Spinner, 
  Dots, 
  Bar, 
  Text, 
  Overlay 
} from './Loader.styles';

const LoaderSpinner: React.FC<LoaderSpinnerProps> = ({ size, color, thickness }) => (
  <Spinner size={size} color={color} thickness={thickness} />
);

const LoaderDots: React.FC<LoaderSpinnerProps> = ({ size, color }) => (
  <Dots size={size} color={color}>
    <div />
    <div />
    <div />
  </Dots>
);

const LoaderBar: React.FC<LoaderSpinnerProps> = ({ size, color }) => (
  <Bar size={size} color={color} />
);

const LoaderText: React.FC<LoaderTextProps> = ({ children, color, size }) => (
  <Text color={color} size={size}>{children}</Text>
);

const LoaderOverlay: React.FC<{ 
  blur?: boolean; 
  children: React.ReactNode 
}> = ({ blur, children }) => (
  <Overlay blur={blur}>{children}</Overlay>
);

export const Loader: React.FC<LoaderProps> & {
  Spinner: typeof LoaderSpinner;
  Dots: typeof LoaderDots;
  Bar: typeof LoaderBar;
  Text: typeof LoaderText;
  Overlay: typeof LoaderOverlay;
} = ({ children, ...props }) => {
  return (
    <StyledLoader {...props}>
      {children || <LoaderSpinner {...props} />}
    </StyledLoader>
  );
};

Loader.Spinner = LoaderSpinner;
Loader.Dots = LoaderDots;
Loader.Bar = LoaderBar;
Loader.Text = LoaderText;
Loader.Overlay = LoaderOverlay;

Loader.displayName = "Loader";
Loader.Spinner.displayName = "Loader.Spinner";
Loader.Dots.displayName = "Loader.Dots";
Loader.Bar.displayName = "Loader.Bar";
Loader.Text.displayName = "Loader.Text";
Loader.Overlay.displayName = "Loader.Overlay";
