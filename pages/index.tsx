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
		const dashboardFiltered = dashboards.filter((elem) => (elem.dashboardId !== selectedDashboard.dashboardId))
		dashboards.some(( dashboard, index) => {
			const id = dashboard.dashboardId
			const board = document.getElementById(id)
			const rect = board.getBoundingClientRect()
			if (e.clientX >= rect.x && e.clientY <= rect.y + rect.width && e.clientY >= rect.y) {
				// 이전에 push
				const newDashboards = dashboardFiltered.reduce((acc, cur, idx) => {
					if (idx === index){
						acc.push(selectedDashboard)
					}
					acc.push(cur)
					return acc
				}, [])
				if (newDashboards.length === dashboards.length) {
					setDashboards(newDashboards)
				}
				return newDashboards.length === dashboards.length
			} else if (e.clientX <= rect.x + rect.height && e.clientY <= rect.y + rect.width && e.clientY >= rect.y) {
				// 이후에 push
				const newDashboards = dashboardFiltered.reduce((acc, cur, idx) => {
					if (idx === index + 1){
						acc.push(selectedDashboard)
					}
					acc.push(cur)
					return acc
				}, [])
				if (newDashboards.length === dashboards.length) {
					setDashboards(newDashboards)
				}
				return newDashboards.length === dashboards.length
			}
		})
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