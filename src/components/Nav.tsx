import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { useSession } from "next-auth/react";

const { Header, Content, Footer } = Layout;

const items = [
  { url: "/", title: "Home" },
  { url: "/character", title: "Characters" },
];

const Nav = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const links = [
    ...items,
    {
      url: status === "authenticated" ? "/api/auth/signout" : "api/auth/signin",
      title: status === "authenticated" ? "logout" : "signin",
    },
  ].map((nav, index) => ({
    key: index + 1,
    label: <Link href={nav.url}>{nav.title}</Link>,
  }));

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={links}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 5px" }}>
        <div
          style={{
            background: colorBgContainer,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Nav;
