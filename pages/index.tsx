import styles from '../styles/Home.module.css'

import HeaderCustom from '../utils/header'
import Sidebar from '../utils/sidebar'
import { Layout, Menu, Breadcrumb } from 'antd'
import 'antd/dist/antd.css'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Main = () => {

	return <>
<Layout>
	<HeaderCustom></HeaderCustom>
    <Layout>
      <Sidebar></Sidebar>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>

	</>
}

export default Main