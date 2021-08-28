import { Button, Col, Row } from "antd"
import React from "react"
import { v4 } from 'uuid'

export interface SRealtimeInterface {
	onDragEndHandler: (e, id: string) => void
	dashboardId: string
}
const SRealtime = ({ onDragEndHandler, dashboardId }: SRealtimeInterface) => {
	return (
		<>
			<div id={dashboardId} style={{height:"100%", background:"white", borderRadius:"1rem", padding: "1px 0 0 .2rem"}}>
				<Row style={{ textAlign:"left", marginTop: "1rem"}}>
					<Col key={`drag${v4()}`} span={1}>
					<Button type="link" onDragEnd={(e) => onDragEndHandler(e, dashboardId)} shape="circle" icon={<img src='/assets/images/buttons/move.svg' />} size='small' />
					</Col>
					<Col key={`realtime${v4()}`} span={3}><b style={{fontSize:"18px"}}>실시간</b></Col>
				</Row>
			</div>
		</>
	)
}

export default SRealtime
