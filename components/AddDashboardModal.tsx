import { Modal, List, Button } from 'antd'
import React, { useRef, useState } from 'react'
import {v4} from 'uuid'
import { DashboardsSettings } from './Dashboards'

interface AddDashboardModalInterface {
	visible: boolean
	setVisible: (visible: boolean) => void
	dashboards: DashboardsSettings[]
	setDashboards: (dashboards: DashboardsSettings[]) => void
}

interface DashboardListStyle {
	display: string
}

export enum dashboardSize {
	LARGE= 21,
	MIDDLE=14,
	SMALL=7
}
const AddDashboardModal = ({visible, setVisible, dashboards, setDashboards}: AddDashboardModalInterface) => {
	const [confirmLoading, setConfirmLoading] = useState<boolean>(false)
	const [listStyle, setListStyle]= useState<DashboardListStyle>({ display: 'initial' })
	const [dashboardSelectStyle, setDashboardSelectStyle]= useState<DashboardListStyle>({ display: 'none' })
	const [selectedAid, setSelectedAid] = useState<string>('calendar')
	const listRef = useRef(null)
	const contentRef = useRef(null)

	const dashboardsData = [
		{
			title: '캘린더',
			aid: 'calendar'
		},
		{
			title: '최근 수익률',
			aid: 'revenue'
		}
	]

	const sizes = [
		{
			title: '대형',
			size: dashboardSize.LARGE
		},
		{
			title: '중형',
			size: dashboardSize.MIDDLE
		},
		{
			title: '소형',
			size: dashboardSize.SMALL
		},
	]
	const handleOk = () => {
		setConfirmLoading(true)
		setVisible(false)
		setConfirmLoading(false)
		setListStyle({display: 'initial' })
		setDashboardSelectStyle({display: 'none' })
	};

	const handleCancel = () => {
		setListStyle({display: 'initial' })
		setDashboardSelectStyle({display: 'none' })
		setVisible(false)
	};
	const onClickDashboardTypesHandler = (aid: string) => {
		setListStyle({display: 'none' })
		setDashboardSelectStyle({display: 'initial' })
		setSelectedAid(aid)
	}

	const onClickSelectDashboardHandler = (size: number) => {
		const dashboardSettings: DashboardsSettings = {
			size: size,
			aid: selectedAid,
			settings: {},
			dashboardId: v4()
		}
		const newDashboardsSettings = [ ...dashboards, dashboardSettings ]
		setDashboards(newDashboardsSettings)
		setListStyle({display: 'initial' })
		setDashboardSelectStyle({display: 'none' })
		setVisible(false);
		setConfirmLoading(false);
	}

	return (
		<>
			<Modal
				title="대시보드"
				visible={visible}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
			>
				<div style={listStyle} ref={listRef}>
					<List
						itemLayout="horizontal"
						dataSource={dashboardsData}
						renderItem={item => (
							<List.Item
								style={{cursor:'pointer'}}
								onClick={() => onClickDashboardTypesHandler(item.aid)}
							>
							<List.Item.Meta
								title={<a>{item.title}</a>}
							/>
						</List.Item>
						)}
					>
					</List>
				</div>
				<div style={dashboardSelectStyle} ref={contentRef}>
					{
						<p>{dashboardsData.find((elem) => (elem.aid === selectedAid)).title}를 선택해주세요</p>
					}
					<List
						itemLayout="horizontal"
						dataSource={sizes}
						renderItem={item => (
							<List.Item
							actions={
								[<Button type="default" size="large" onClick={() => onClickSelectDashboardHandler(item.size)}>적용</Button>]
							}
							>
							<List.Item.Meta
								title={<a href="/">{item.title}사이즈</a>}
							/>
						</List.Item>
						)}
					>
					</List>
				</div>
			</Modal>
		</>
	)
}

export default AddDashboardModal
