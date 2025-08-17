// .storybook/preview.tsx
import type { Preview, Decorator } from "@storybook/react";
import React from 'react';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { colors, breakpoints, fontSizes } from "../src/tokens/tokens";

// REMOVEMOS as importações de 'next/font'

// Recriamos os estilos globais para usar os nomes das fontes diretamente
const GlobalStyles = createGlobalStyle`
  body {
    /* Usamos os nomes das fontes como strings */
    font-family: 'Rubik', 'Montserrat', sans-serif;
    background-color: ${colors.gray[100]};
    color: ${colors.gray[900]};
    line-height: 1.5;
    padding: 1rem;
  }
`;

const theme = { colors, breakpoints, fontSizes };

const withTheme: Decorator = (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
);

const preview: Preview = {
  parameters: {
    // REMOVEMOS a linha 'actions: { argTypesRegex: "^on[A-Z].*" },'
    // As ações agora são gerenciadas por addons ou explicitamente nas stories.
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;