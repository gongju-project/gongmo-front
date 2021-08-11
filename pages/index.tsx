import styles from '../styles/Home.module.css'

import HeaderCustom from '../utils/header'
import Sidebar from '../utils/sidebar'
import { Col, Layout, Row } from 'antd'
import 'antd/dist/antd.css'
import SampleSmall from '../boards/sampleBoardSmall'
import React, { useState } from 'react'
import SampleBig from '../boards/sampleBoardBig'
import SampleLong from '../boards/sampleBoardLong'
const { Content } = Layout;


const boards = [
	{
		element: <SampleSmall></SampleSmall>,
		span: 12,
		height: 400
	},
	{
		element: <SampleBig></SampleBig>,
		span: 24,
		height: 400
	},
	{
		element: <SampleLong></SampleLong>,
		span: 24,
		height: 200
	}
]

const Main = () => {
	const [usedBoards, setUsedBoards] = useState([])
	const [usedBoardsRect, setUsedBoardsRect] = useState([])
	const onDragOver = (e) => {
		e.preventDefault()
	}
	const onDrop = (e) => {
		const id = e.dataTransfer.getData("id")
		const clientRect = document.getElementById("content-dashboard").getBoundingClientRect()
		setUsedBoards([...usedBoards, boards[id]])
		console.log(usedBoards)
		console.log(`clientX:${e.clientX}, clientY:${e.clientY}`)

	}

    return <>
        <Layout>
            <HeaderCustom currentMenuKey={1} ></HeaderCustom>
            <Layout>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content className="site-layout-background" style={{}}>
                        <div id="content-dashboard" style={{ height: "100%", minHeight: 1024 }} onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e)}>
                            {
                                <Row>
                                    {
                                        usedBoards.map((board, index) => (
                                            <Col span={board.span} key={index} style={{ height: board.height, padding: "10px" }}>{board.element}</Col>))
                                    }
                                </Row>
                            }
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
	</>
}

export default Main