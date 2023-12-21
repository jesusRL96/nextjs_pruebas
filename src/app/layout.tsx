"use client"
import React from "react";
import { Inter } from "next/font/google";
import { ConfigProvider } from 'antd';

import StyledComponentsRegistry from "../lib/AntdRegistry";
import theme from "./theme/themeConfig";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });


const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>
					<Nav>
						{children}
					</Nav>
				</ConfigProvider>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
