import Head from "next/head"
import React from "react"
import styles from "../styles/Home.module.css"
const { Header, } = Layout
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
const HeaderCustom = () => {

	const menus = [
		{
			title: "데모 페이지",
			url: "/main",
			key: 1
		},
		{
			title: "마이 페이지",
			url: "/myPage",
			key: 2
		},
		{
			title: "로그인",
			url: "/signIn",
			key: 3
		}
	]
	return <>
		<Head>
			<title>Finwhale</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Header className={styles.navbar}>
			<a className={styles.headerLogo} href='/'><img src='/logo/logo.png' width='50' height='50'></img></a>
			<Menu className={styles.menuWrap} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
				{
					menus.map((menu) => (
						<Menu.Item key={menu.key}>{menu.title}</Menu.Item>
					))
				}
			</Menu>
    	</Header>
		{/* <div className={styles.navbar}>
			<a className={styles.headerLogo} href='/'><img src='/logo/logo.png' width='50' height='50'></img></a>
			<div className={styles.menuWrap}>
			{	
				menus.map((menu) => (
					<a className={styles.headerMenu} href={menu.url}>{ menu.title }</a>
				))
			}
			</div>
		</div> */}
	</>
}

export default HeaderCustom