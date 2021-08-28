import { Button, Col, Row } from "antd"
import React from "react"

export interface SCalenderInterface {
	onDragEndHandler: (e, id: string) => void
	dashboardId: string
}
const SCalendar = ({ onDragEndHandler, dashboardId }: SCalenderInterface) => {
	return (
		<>
			<div id={dashboardId} style={{height:"100%", background:"white", borderRadius:"1rem", padding: "1px 0 0 .2rem"}}>
				<Row style={{ textAlign:"left", marginTop: "1rem"}}>
					<Col span={1}>
					<Button type="link" onDragEnd={(e) => onDragEndHandler(e, dashboardId)} shape="circle" icon={<img src='/assets/images/buttons/move.svg' />} size='small' />
					</Col>
					<Col span={3}><b style={{fontSize:"18px"}}>캘린더</b></Col>
				</Row>
			</div>
		</>
	)
}

export default SCalendar
