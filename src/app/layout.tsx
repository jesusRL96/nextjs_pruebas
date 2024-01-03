import React from "react";
import { Inter } from "next/font/google";
import { ConfigProvider } from "antd";

import StyledComponentsRegistry from "../lib/AntdRegistry";
import Nav from "@/components/Nav";
import AuthProvider from "@/components/AuthProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = (props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>
        <AuthProvider>
          <Nav>{props.children}</Nav>
        </AuthProvider>
        {props.modal}
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
