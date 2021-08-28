import HeaderCustom from '../../components/Header'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
const { Content } = Layout
const Main = () => {
	return <>
		<Layout>
			<HeaderCustom currentMenuKey={3} ></HeaderCustom>
			<Layout style={{ padding: '0 24px 24px' }}>
				<Content
					className="site-layout-background"
					style={{
						padding: 24,
						margin: 0,
						minHeight: 280,
					}}
				>
				</Content>
			</Layout>
		</Layout>
	</>
}

export default Main
