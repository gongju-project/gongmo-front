import { Button, Col, Row } from "antd"
import React from "react"
import { v4 } from "uuid"

export interface MCalenderInterface {
	onDragEndHandler: (e, id: string) => void
	dashboardId: string
}
const MCalendar = ({ onDragEndHandler, dashboardId }: MCalenderInterface) => {
	return (
		<>
			<div id={dashboardId} style={{height:"100%", background:"white", borderRadius:"1rem", padding: "1px 0 0 .2rem"}}>
				<Row style={{ textAlign:"left", marginTop: "1rem"}}>
					<Col key={`drag${v4()}`} span={1}>
					<Button type="link" onDragEnd={(e) => onDragEndHandler(e, dashboardId)} shape="circle" icon={<img src='/assets/images/buttons/move.svg' />} size='small' />
					</Col>
					<Col key={`calendar${v4()}`} span={3}><b style={{fontSize:"18px"}}>캘린더</b></Col>
				</Row>
			</div>
		</>
	)
}

export default MCalendar
