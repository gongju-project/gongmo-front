import Head from "next/head"
import React from "react"
import styles from "../styles/Home.module.css"
const { Header, } = Layout
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'

interface HeaderInterface {
	currentMenuKey: number
}
const HeaderCustom = ({currentMenuKey}: HeaderInterface) => {

	const menus = [
		{
			title: "홈",
			url: "/",
			key: 1
		},
		{
			title: "공모백과",
            url: "/encyclopedia",
			key: 2
		}
	]
	return <>
		<Head>
			<title>Finwhale</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Header className={styles.navbar}>
			<a className={styles.headerLogo} href='/'><img src='/logo/logo.png' width='50' height='50'></img></a>
			<Menu className={styles.menuWrap} theme="dark" mode="horizontal" defaultSelectedKeys={[currentMenuKey.toString()]}>
				{
					menus.map((menu) => (
						<Menu.Item key={menu.key} onClick={() => location.href = menu.url}>{menu.title}</Menu.Item>
					))
				}
			</Menu>
    	</Header>
	</>
}

export default HeaderCustom