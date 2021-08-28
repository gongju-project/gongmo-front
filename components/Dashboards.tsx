import styles from '../styles/dashboard.module.css'
import { Col, } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import { dashboardSize } from '../components/AddDashboardModal'
import LCalendar from '../components/calendar/LCalendar'
import MCalendar from '../components/calendar/MCalendar'
import SCalendar from '../components/calendar/SCalendar'
import { v4 } from 'uuid'
import LRevenue from './revenue/LRevenue'
import MRevenue from './revenue/MRevenue'
import SRevenue from './revenue/SRevenue'
import LRealtime from './realtime/LRealtime'
import MRealtime from './realtime/MRealtime'
import SRealtime from './realtime/SRealtime'

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
			} else if (dashboard.aid === 'revenue' && dashboard.size === dashboardSize.MIDDLE) {
				var dashboardElem = <LRevenue
					onDragEndHandler={onDragEndHandler}
					dashboardId={dashboard.dashboardId}
				></LRevenue>
			} else if (dashboard.aid === 'revenue' && dashboard.size === dashboardSize.SMALL) {
				var dashboardElem = <MRevenue
					onDragEndHandler={onDragEndHandler}
					dashboardId={dashboard.dashboardId}
				></MRevenue>
			} else if (dashboard.aid === 'revenue' && dashboard.size === dashboardSize.SMALL) {
				var dashboardElem = <SRevenue
					onDragEndHandler={onDragEndHandler}
					dashboardId={dashboard.dashboardId}
				></SRevenue>
			}else if (dashboard.aid === 'realtime' && dashboard.size === dashboardSize.LARGE) {
				var dashboardElem = <LRealtime
					onDragEndHandler={onDragEndHandler}
					dashboardId={dashboard.dashboardId}
				></LRealtime>
			} else if (dashboard.aid === 'realtime' && dashboard.size === dashboardSize.MIDDLE) {
				var dashboardElem = <MRealtime
					onDragEndHandler={onDragEndHandler}
					dashboardId={dashboard.dashboardId}
				></MRealtime>
			} else if (dashboard.aid === 'realtime' && dashboard.size === dashboardSize.SMALL) {
				var dashboardElem = <SRealtime
					onDragEndHandler={onDragEndHandler}
					dashboardId={dashboard.dashboardId}
				></SRealtime>
			}
			return (<Col key={`dashboards${v4()}`} className={styles.dashboardCommon} span={dashboard.size}>
				{dashboardElem}
			</Col>)
		})
		}
	</>
}

export default Dashboards