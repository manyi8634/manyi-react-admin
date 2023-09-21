import React, { useState } from 'react';
import { useNavigate,useLocation,Outlet } from 'react-router-dom';
import { Layout, Menu, Button, theme } from 'antd';
import type { MenuProps } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { HomeWrapper } from './style';

const { Header, Sider, Content,Footer } = Layout;

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
];

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();

  const handleSelect:(value:any)=>void = (value)=>{
    navigate(value.key)
  };

  return (
    <HomeWrapper colorbgcontainer={colorBgContainer} collapsed={collapsed ? 1 : 0 }>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} className="sider">
          <img src={require('@/assets/images/logo.png')} alt='Manyi React Admin'/>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[location.pathname]}
            items={items} 
            onSelect={handleSelect}
          />
        </Sider>
        <Layout className="lauout-main" >
          <Header>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
          </Header>
          <Content>
            {/* 路由展示区 */}
            <Outlet/>
          </Content>
          <Footer style={{ }}>
            Manyi React Admin ©2023 Created by Manyi   
            <Button 
              type="link" 
              onClick={()=>window.open('https://github.com/manyi8634')}>Manyi's Github</Button>
            </Footer>
        </Layout>
      </Layout>
    </HomeWrapper>
  );
};

export default App;