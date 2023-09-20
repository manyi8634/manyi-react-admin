import React from 'react';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { useNavigate,useLocation,Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key:'/home/bar',
    icon:React.createElement(UserOutlined),
    label:'bar'
  },
  {
    key:'/home/foo',
    icon:React.createElement(VideoCameraOutlined),
    label:'foo'
  }
]

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token: { colorBgContainer } } = theme.useToken();

  const handleSelect:(value:any)=>void = (value)=>{
    navigate(value.key)
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu 
          theme="dark" 
          mode="inline" 
          selectedKeys={[location.pathname]}
          items={items} 
          onSelect={handleSelect}/>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Outlet/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;