import HeaderCustom from '../components/Header'
import { Button, Col, Layout, Row } from 'antd'
import 'antd/dist/antd.css'
import React, { useState } from 'react'
import AddDashboardModal from '../components/AddDashboardModal'
import MainSettingsModal from '../components/MainSettingsModal'


const Main = () => {
	const [dashboardVisible, setDashboardVisible] = useState(false)
	const [settingsVisible, setSettingsVisible] = useState(false)
	const onClickPlusHandler = () => {
		setDashboardVisible(true)
	}

	const onClickSettingsHandler = () => {
		setSettingsVisible(true)
	}

	return <>
		<Layout>
			<AddDashboardModal
				visible={dashboardVisible}
				setVisible={setDashboardVisible}
			></AddDashboardModal>
			<MainSettingsModal
				visible={settingsVisible}
				setVisible={setSettingsVisible}
			></MainSettingsModal>
			<HeaderCustom currentMenuKey={1} ></HeaderCustom>
			<Row style={{ marginTop: '1.5rem' }}>
				<Col span={4}></Col>
				<Col span={16} style={{ textAlign: 'right' }}>
					<Button onClick={() => onClickPlusHandler()} type="link" shape="circle" icon={<img src='/assets/images/buttons/plus.svg' />} size='large' />
					<Button onClick={() => onClickSettingsHandler()} type="link" shape="circle" icon={<img src='/assets/images/buttons/settings.svg' />} size='large' />
				</Col>
				<Col span={4}></Col>
			</Row>
		</Layout>
	</>
}

export default Main