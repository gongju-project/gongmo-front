import { Modal, List } from 'antd'
import { useEffect, useRef, useState } from 'react';

interface AddDashboardModalInterface {
	visible: boolean
	setVisible: (visible: boolean) => void
}

interface DashboardListStyle {
	display: string
}
const AddDashboardModal = ({visible, setVisible}: AddDashboardModalInterface) => {
	const [confirmLoading, setConfirmLoading] = useState<boolean>(false)
	const [listStyle, setListStyle]= useState<DashboardListStyle>({ display: 'initial' })
	const [dashboardSelectStyle, setDashboardSelectStyle]= useState<DashboardListStyle>({ display: 'none' })
	const [selectedAid, setSelectedAid] = useState<string>('')
	const listRef = useRef(null)
	const contentRef = useRef(null)

	const dashboards = [
		{
			title: '캘린더',
			aid: 'calander'
		},
		{
			title: '계산기',
			aid: 'calculator'
		}
	]

	const sizes = [
		{
			title: '대형'
		},
		{
			title: '중형'
		},
		{
			title: '소형'
		},
	]
	const handleOk = () => {
		setConfirmLoading(true);
		setVisible(false);
		setConfirmLoading(false);
	};

	const handleCancel = () => {
		setVisible(false)
	};
	const onClickDashboardTypesHandler = (aid: string) => {
		setListStyle({display: 'none'})
		setDashboardSelectStyle({display: 'initial'})
		setSelectedAid(aid)
	}

	const onClickSelectDashboardHandler = () => {

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
						dataSource={dashboards}
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

					<List
						itemLayout="horizontal"
						dataSource={sizes}
						renderItem={item => (
							<List.Item
							style={{cursor:'pointer'}}
								onClick={() => onClickSelectDashboardHandler()}
							>
							<List.Item.Meta
								title={<a href="/">{item.title}</a>}
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
