
import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
//import Buju from './components/Buju';
import { Layout, Menu, Icon, Row, Col } from 'antd';

import Card1 from './components/cards/Card1';
import FrontCard from './components/cards/FrontCard';
import Card2 from './components/cards/Card2';
import MapCard from './components/cards/MapCard';
import StatCard from './components/cards/StatCard';
import NewsCard from './components/cards/NewsCard';
import ForumCard from './components/cards/ForumCard';
import WeatherCard from './components/cards/WeatherCard';
import WholeProCard from './components/cards/WholeProCard';
import TodoCard from './components/cards/TodoCard';




const { Header, Sider, Content } = Layout;

class App extends React.Component {
    state = {
        collapsed: true,
    };
    
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };
    
    render() {
        return (
          <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" href="#"/>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span>nav 3</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 280,
                }}
              >
              <Col span={16} >
                <Row >
                  <Col span={12}>
                    <Row type="flex" justify="center" align="top"><FrontCard /></Row>
                    <Row type="flex" justify="center" align="top"><WholeProCard /></Row>
                  </Col>
                  <Col span={12} >
                    <Row >
                      <Card1 />
                    </Row>
                    <Row >
                      <Card2 />
                    </Row>
                  </Col>
                </Row>
                <Row >
                  <MapCard />
                </Row>
                <Row >
                  <StatCard />
                </Row>
                <Row>
                  <TodoCard />
                </Row>
              </Col>  
              <Col span={8} >
                <Row type="flex" justify="center" align="middle">
                  <WeatherCard />
                </Row>
                <Row type="flex" justify="center" align="middle">
                  <NewsCard />
                </Row>
                <Row type="flex" justify="center" align="middle">
                  <ForumCard />
                </Row>               
              </Col>
              </Content>
            </Layout>
          </Layout>
        );
    }
}

//ReactDOM.render(<SiderDemo />, document.getElementById('container'));
export default App;