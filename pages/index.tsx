import HeaderCustom from '../components/Header'
import { Button, Col, Layout, Row } from 'antd'
import 'antd/dist/antd.css'
import React, { useState } from 'react'
import AddDashboardModal from '../components/AddDashboardModal'
import MainSettingsModal from '../components/MainSettingsModal'
import Dashboards, { DashboardsSettings } from '../components/Dashboards'

const Main = () => {
	const [dashboardVisible, setDashboardVisible] = useState(false)
	const [settingsVisible, setSettingsVisible] = useState(false)
	const [dashboards, setDashboards] = useState<DashboardsSettings[]>([])
	const onClickPlusHandler = () => {
		setDashboardVisible(true)
	}

	const onClickSettingsHandler = () => {
		setSettingsVisible(true)
	}

	const onDragEndHandler = (e, dashboardId: string) => {
		const selectedDashboard = dashboards.find((dashboard) => (dashboard.dashboardId === dashboardId))
		const newDashboards = dashboards
		const workingDashboards = dashboards.map(( dashboard, index) => {
			const id = dashboard.dashboardId
			const board = document.getElementById(id)
			const rect = board.getBoundingClientRect()
			console.log(rect)
			const y = - (rect.height / rect.width) * (e.clientX - rect.x) + rect.y
			const deleteExistingDashboardIndex = newDashboards.findIndex((dashboard) => (dashboard.dashboardId === selectedDashboard.dashboardId))
			if (e.clientX >= rect.x && y <= e.clientY && e.clientY >= rect.y) {
				// 이전에 push
				newDashboards.splice(deleteExistingDashboardIndex, 1)
				newDashboards.splice(index, 0, selectedDashboard)
			} else if ( y >= e.clientY && e.clientX <= rect.x + rect.height && e.clientY <= rect.y + rect.width) {
				// 이후에 push
				newDashboards.splice(deleteExistingDashboardIndex, 1)
				newDashboards.splice(index + 1, 0, selectedDashboard)
			}
			return dashboard
		})
		console.log(newDashboards)
		setDashboards(newDashboards)
	}

	return <>
		<Layout>
			<AddDashboardModal
				visible={dashboardVisible}
				setVisible={setDashboardVisible}
				dashboards={dashboards}
				setDashboards={setDashboards}
			></AddDashboardModal>
			<MainSettingsModal
				visible={settingsVisible}
				setVisible={setSettingsVisible}
			></MainSettingsModal>
			<HeaderCustom currentMenuKey={1} ></HeaderCustom>
			<Row style={{ marginTop: '1.5rem' }}>
				<Col span={3}></Col>
				<Col span={18} style={{ textAlign: 'right' }}>
					<Row>
						<Col span={3}></Col>
						<Col span={18} style={{ textAlign: 'right' }}>
							<Button onClick={() => onClickPlusHandler()} type="link" shape="circle" icon={<img src='/assets/images/buttons/plus.svg' />} size='large' />
							<Button onClick={() => onClickSettingsHandler()} type="link" shape="circle" icon={<img src='/assets/images/buttons/settings.svg' />} size='large' />
						</Col>
						<Col span={3}></Col>
					</Row>
					<Row>
						<Dashboards
							dashboards={dashboards}
							onDragEndHandler={onDragEndHandler}
						></Dashboards>
					</Row>
				</Col>
				<Col span={3}></Col>
			</Row>
		</Layout>
	</>
}

export default Main