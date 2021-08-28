import Head from "next/head"
import React, { useState } from "react"
import styles from "../styles/Home.module.css"
const { Header } = Layout
import { Layout, Menu } from 'antd'
import { BellOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import { HeaderMenuModel } from "../model/MainModel"
import { useRouter } from 'next/router'
import SearchCustom from "./SearchCustom"

interface HeaderInterface {
	currentMenuKey: number
}
const HeaderCustom = ({currentMenuKey}: HeaderInterface) => {

	const [searchString, setSearchString] = useState<string>("")
	const menus: HeaderMenuModel[] = [new HeaderMenuModel("홈", "/", 1), new HeaderMenuModel("공모백과", "/encyclopedia", 2) ]
	
	const router = useRouter()

	const iconMenu = [
		{
			url: "/",
			key: 3,
			icon: BellOutlined
		}
	]
	
	const onClickLogoHandler = () => {
		router.push("/")
	}
	
	const onClickMenuHandler = (url: string) => {
		router.push(url)
	}
	const onClickMyPageHandler = () => {
		router.push("/signIn")
	}

	// TODO 기본적으로 return 안쪽에는 변수가 들어가면 안되고 모든 값은 위에서 결정된 값이 들어가야 합니다
	// TODO a 태그 안에 이미지 넣는거 안티패턴이라서 이미지 클릭 로고 방식 바꾸는거 추천드립니다
	return <>
		<Head>
			<title>Finwhale</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Header className={styles.headerMain}>
			<div className={styles.header} >
				<div style= {{ marginRight: 'auto'}}>
					<img className={styles.headerLogo} onClick={ () => onClickLogoHandler() } src='/logo/logo.png' width='50' height='50'></img>
				</div>
				<nav className={styles.headerNav}>
					<div className={styles.headerContents}>
						<Menu className='headerMenu' mode="horizontal" defaultSelectedKeys={[currentMenuKey.toString()]}>
							{
								menus.map((menu) => (
									<Menu.Item key={menu.key} onClick={() => onClickMenuHandler(menu.url)}>{menu.title}</Menu.Item>
								))
							}
						</Menu>
						<SearchCustom
							searchString = { searchString }
							searchbarStyle = { styles.headerSearchbar }
						/>
						<Menu mode="horizontal" >
							{
								iconMenu.map((menu) => (
									<Menu.Item key={menu.key} onClick={() => location.href = menu.url} icon={<menu.icon />}></Menu.Item>
								))
							}
						</Menu>
						<div className={styles.headerMyProfile} onClick={() => onClickMyPageHandler()} />
					</div>
				</nav>
			</div>
		</Header>
	</>
}

export default HeaderCustom