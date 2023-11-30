import React from 'react';
// import {Header} from "antd/es/layout/layout";
import Header from "antd/es/layout/layout";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import {Footer} from "antd/es/layout/layout";
import Top from "../../components/header";
import routes from "../../routes";
import {useRoutes} from "react-router-dom";
import router from "../../routes";
const Index = () => {
    const { Header, Footer, Sider, Content } = Layout;

    const headerStyle: React.CSSProperties = {
        height: 60,
        padding:0,
        lineHeight: '60px',
        backgroundColor: '#fff',
    };

    const contentStyle: React.CSSProperties = {
        textAlign: 'center',
        minHeight: 120,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:10,
        backgroundColor: 'rgb(222,222,222)'
    };

    const footerStyle: React.CSSProperties = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'rgb(222,222,222)',
    };
    const routes = useRoutes(router)
    return (
        <div>
            <Layout>
                <Header style={headerStyle}>
                    <Top/>
                </Header>
                <Content style={contentStyle}>
                    {routes}
                </Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </div>
    );
};

export default Index;