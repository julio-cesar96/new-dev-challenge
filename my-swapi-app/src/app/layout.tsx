"use client";

import { Montserrat, Rubik } from "next/font/google";
import { ReactNode, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { colors, breakpoints, fontSizes } from "@/tokens/tokens";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
});


const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${rubik.style.fontFamily}, ${montserrat.style.fontFamily}, sans-serif;
    background-color: ${colors.gray[100]};
    color: ${colors.gray[900]};
    line-height: 1.5;
  }
`;

const theme = { colors, breakpoints, fontSizes };

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        retry: 3,
      },
    },
  }));

  return (
    <html lang="pt-BR">
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}