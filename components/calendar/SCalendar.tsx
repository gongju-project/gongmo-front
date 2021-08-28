import { Button, Col, Row } from "antd"
import React, { useState } from "react"

export interface SCalenderInterface {
	onDragEndHandler: (e, id: string) => void
	dashboardId: string
}
const SCalendar = ({ onDragEndHandler, dashboardId }: SCalenderInterface) => {
	const [id, setId] = useState<string>('')
	setId(dashboardId)


	return (
		<>
			<div>
				<Row style={{ textAlign:"left", marginTop: "1rem"}}>
					<Col span={1}>
					<Button type="link" onDragEnd={(e) => onDragEndHandler(e, id)} shape="circle" icon={<img src='/assets/images/buttons/move.svg' />} size='small' />
					</Col>
					<Col span={3}><b style={{fontSize:"18px"}}>캘린더</b></Col>
				</Row>
			</div>
		</>
	)
}

export default SCalendar
