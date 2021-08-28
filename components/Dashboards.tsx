import HeaderCustom from '../components/Header'
import styles from '../styles/dashboard.module.css'
import { Button, Col, Layout, Row } from 'antd'
import 'antd/dist/antd.css'
import React, { createRef, useRef } from 'react'
import { dashboardSize } from '../components/AddDashboardModal'
import LCalendar from '../components/calendar/LCalendar'
import MCalendar from '../components/calendar/MCalendar'
import SCalendar from '../components/calendar/SCalendar'
import { v4 } from 'uuid'

export interface DashboardsSettings {
	size: number
	dashboardId: string
	aid: string
	settings: any
}

export interface DashboardsInterface {
	dashboards: DashboardsSettings[]
	onDragEndHandler: (e, dashboardId: string) => void
}
const Dashboards = ({dashboards, onDragEndHandler}:DashboardsInterface) => {

	return <>
		{dashboards.map((dashboard) => {
			if (dashboard.aid === 'calendar' && dashboard.size === dashboardSize.LARGE) {
				var dashboardElem = <LCalendar
					onDragEndHandler={onDragEndHandler}
					dashboardId={dashboard.dashboardId}
				></LCalendar>
			} else if (dashboard.aid === 'calendar' && dashboard.size === dashboardSize.MIDDLE) {
				var dashboardElem = <MCalendar
					onDragEndHandler={onDragEndHandler}
					dashboardId={dashboard.dashboardId}
				></MCalendar>
			} else if (dashboard.aid === 'calendar' && dashboard.size === dashboardSize.SMALL) {
				var dashboardElem = <SCalendar
					onDragEndHandler={onDragEndHandler}
					dashboardId={dashboard.dashboardId}
				></SCalendar>
			}
			return (<Col key={`dashboards${v4()}`} className={styles.dashboardCommon} span={dashboard.size}>
				{dashboardElem}
			</Col>)
		})
		}
	</>
}

export default Dashboards