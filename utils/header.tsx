import Head from "next/head"
import React from "react"
import styles from "../styles/Home.module.css"
const { Header, } = Layout
import { Layout, Menu, Input, Space } from 'antd'
import { BellOutlined, UserOutlined } from '@ant-design/icons'
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
    const { Search } = Input
    const onSearch = value => console.log(value)
    const iconMenu = [
        {
            url: "/",
            key: 3,
            icon: BellOutlined
        },
        {
            url: "/myPage",
            key: 4,
            icon: UserOutlined
        },
        ]
	return <>
		<Head>
			<title>Finwhale</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
        <Header >
            <div className={styles.header} >
                <div>
                    <a className={styles.headerLogo} href='/'><img src='/logo/logo.png' width='50' height='50'></img></a>
                </div>
                <nav>
                    <div className={styles.headerContents}>
                        <Menu mode="horizontal" defaultSelectedKeys={[currentMenuKey.toString()]}>
                            {
                                menus.map((menu) => (
                                    <Menu.Item key={menu.key} onClick={() => location.href = menu.url}>{menu.title}</Menu.Item>
                                ))
                            }
                        </Menu>
                        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                        <Menu mode="horizontal" >
                            {
                                iconMenu.map((menu) => (
                                    <Menu.Item key={menu.key} onClick={() => location.href = menu.url} icon={<menu.icon />}></Menu.Item>
                                ))
                            }
                        </Menu>
                    </div>
                </nav>
            </div>
        </Header>
	</>
}

export default HeaderCustom