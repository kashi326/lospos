import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Dropdown from "@/Components/Dropdown";
import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import TopHeader from "@/Layouts/TopHeader";

const { Content, Footer, Sider, Header } = Layout;

const items = [
    {
        key: 1,
        icon: <UserOutlined />,
        label: <Link href={route("customers.index")}>Customers</Link>
    }
];
const AuthenticatedLayout = ({ header, children }) => {
    const {
        token: { colorBgContainer }
    } = theme.useToken();
    const [collapsed, setCollapsed] = useState(false);
    const { auth = {} } = usePage().props;
    return (
        <Layout
            style={{
                minHeight: "100vh"
            }}
        >
            <Sider
                theme={"light"}
                style={{ background: "#006D77" }}
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div
                    style={{
                        height: 32,
                        margin: 16,
                        background: "rgba(198,21,21,0.2)"
                    }}
                />
                <Menu
                    style={{ background: "#006D77" }}
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer
                    }}
                    children={<TopHeader auth={auth} />}
                />
                {header && (
                    <div
                        className="flex items-center h-[64px]"
                        style={{
                            borderTop:"1px solid rgba(0,0,0,0.29)",
                            background: colorBgContainer,
                            padding: 15
                        }}
                    >
                        {header}
                    </div>
                )}
                <Content
                    style={{
                        margin: "0 16px"
                    }}
                >
                    <main>{children}</main>
                </Content>
                <Footer
                    style={{
                        textAlign: "center"
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default AuthenticatedLayout;
