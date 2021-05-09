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
			title: "대시보드",
			url: "/",
			key: 1
		},
		{
			title: "데모 페이지",
			url: "/main",
			key: 2
		},
		{
			title: "마이 페이지",
			url: "/myPage",
			key: 3
		},
		{
			title: "로그인",
			url: "/signIn",
			key: 4
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