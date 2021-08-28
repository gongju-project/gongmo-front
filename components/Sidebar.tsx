
import React from "react"
import styles from "../styles/Home.module.css"
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import { UserOutlined } from '@ant-design/icons'

const { SubMenu } = Menu
const { Sider } = Layout
const Sidebar = () => {
	const dashboards = {
		candidate : [],
		inDashboard: []
	}
	const onDragStart = (e, id) => {
		e.dataTransfer.setData("id", id)
	}
	const menus = [
		{
			title: "대시보드 유형 1",
			key: "sub1",
			submenu: [
				{
					title: "작은 유형 1",
				},
				{
					title: "큰 유형 1",
				},
				{
					title: "긴 유형 1",
				}
			]
		},
		{
			title: "대시보드 유형 2",
			key: "sub2",
			submenu: [
				{
					title: "option1",
				},
				{
					title: "option2",
				},
				{
					title: "option3",
				},
				{
					title: "option4",
				}
			]
		},
		{
			title: "대시보드 유형 3",
			key: "sub3",
			submenu: [
				{
					title: "option1",
				},
				{
					title: "option2",
				},
				{
					title: "option3",
				},
				{
					title: "option4",
				}
			]
		}
	]
	return <>
<Sider width={200} className="site-layout-background">
		<Menu
		  mode="inline"
		  defaultSelectedKeys={['1']}
		  defaultOpenKeys={['sub1']}
		  style={{ height: '100%', borderRight: 0 }}
		>
		{			
			menus.map((menu, index) => (
				<SubMenu key={menu.key} icon={<UserOutlined />} title={menu.title}>
					{
						menu.submenu.map((submenu, subIndex) => (
							<Menu.Item key={index * 4 + subIndex}>
								<div
									draggable
									onDragStart = { (e) => onDragStart(e, index * 4 + subIndex)}
								>
									{submenu.title}
								</div>
							</Menu.Item>
						))
					}
			  	</SubMenu>
		))
		}
		</Menu>
	  </Sider>
	</>
}

export default Sidebar