/*
 * @Author: Chendapeng
 * @Date: 2021-06-13 20:35:51
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-04-28 20:58:33
 * @Description: 布局基本组件
 */
import { Layout, Button, Menu } from "antd";
import * as React from 'react'
import { RouteComponentProps } from "react-router";
import {
  DesktopOutlined,
  FileOutlined,
  UserOutlined,
  TeamOutlined
} from '@ant-design/icons';

export interface IBasicLayoutProps extends RouteComponentProps {
  title: string,
  loading: boolean
}
export interface IBasicLayoutState {
  collapsed: boolean,
  defaultSelectedKeys: string
}
const {
  Header, Content, Sider, Footer
} = Layout
const {
  SubMenu
} = Menu

export default class BasicLayout extends React.Component<
  IBasicLayoutProps,
  IBasicLayoutState
> {
  constructor(props: IBasicLayoutProps) {
    super(props)
    this.state = {
      collapsed: false,
      defaultSelectedKeys: '1'
    };
  }

  onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  componentDidMount() {
    // const history = this.props.history
    // if (history?.location?.pathname === '/class') {
    //   this.setState({
    //     defaultSelectedKeys: '2'
    //   })
    // }
  }
  render() {
    const { collapsed, defaultSelectedKeys } = this.state;
    const headerStyle = {
      backgroundColor: 'white',
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
    }
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={[defaultSelectedKeys]} mode="inline">
            {/* <Menu.Item key="1" icon={<PieChartOutlined />} onClick={() => {
                this.props.history.push('/hook')
              }}>
              Hook Study
            </Menu.Item> */}
            <Menu.Item key="2" icon={<DesktopOutlined />} onClick={() => {
              this.props.history.push('/class')
            }}>
              TS Study
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="HOOK">
              <Menu.Item key="3" onClick={() => {
                this.props.history.push('/hook')
              }}
              >Hook1</Menu.Item>
              <Menu.Item key="4" onClick={() => {
                this.props.history.push('/hook2')
              }}
              >Hook2</Menu.Item>
              <Menu.Item key="5" onClick={() => {
                this.props.history.push('/hook3')
              }}>Hooks</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Redux">
              <Menu.Item key="6" onClick={() => {
                this.props.history.push('/redux1')
              }}>Redux one</Menu.Item>
              <Menu.Item key="8" onClick={() => {
                this.props.history.push('/redux2')
              }}>Redux counter</Menu.Item>
              <Menu.Item key="7" onClick={() => {
                this.props.history.push('/redux3')
              }}>Mock Redux counter</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} onClick={() => {
              this.props.history.push('/table')
            }}>
              Files表格
            </Menu.Item>
            <SubMenu key="12" icon={<TeamOutlined />} title="FreeCode">
              <Menu.Item key="10" onClick={() => {
                this.props.history.push('/freeCode')
              }}>Free Code</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            <div style={{ textAlign: 'left' }}>
              菜单
            </div>
            <Button
              style={{ transform: 'translate(25px, 14px)' }}
              onClick={() => {
                this.props.history.push('/login')
              }}
            >退出</Button>
          </Header>
          <Content id='mainContent'>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}
