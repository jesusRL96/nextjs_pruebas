"use client"
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
	const {status, data:session} = useSession()
  // const session = await getServerSession(nextAuthOptions);

  const links = [
    ...items,
    {
      url: session ? "/api/auth/signout" : "api/auth/signin",
      title: session ? "logout" : "signin",
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
        <div>{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Nav;
