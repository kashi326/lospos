import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';
import {Breadcrumb, Button, Layout, Menu, theme} from 'antd';
import Dropdown from '@/Components/Dropdown'
import React, {useState} from 'react';
import { Link} from "@inertiajs/inertia-react";
import TopHeader from "@/Layouts/TopHeader";

const { Content, Footer, Sider,Header } = Layout;


const items = [
    {
        key:1,
        icon:<UserOutlined/>,
        label:"Customers",
    },];
const AuthenticatedLayout = ({auth, header, children}) => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div
                    style={{
                        height: 32,
                        margin: 16,
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                />
                <Menu theme={"dark"} defaultSelectedKeys={['1']} mode="inline" items={items}/>
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                    children={<TopHeader auth={auth}/>}
                />
                <hr/>
                <div className="flex items-center h-[64px]" style={{
                    background: colorBgContainer,
                    padding:15
                }}>
                    {header}
                </div>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>

                    <main>{children}</main>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default AuthenticatedLayout;
