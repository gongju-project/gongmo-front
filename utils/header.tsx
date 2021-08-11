import Head from "next/head"
import React from "react"
import styles from "../styles/Home.module.css"
const { Header } = Layout
import { Layout, Menu, Input, Space } from 'antd'
import { BellOutlined, UserOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import { MainMenuModel } from "../model/MainMenuModel"
import { useRouter } from 'next/router'

interface HeaderInterface {
	currentMenuKey: number
}
const HeaderCustom = ({currentMenuKey}: HeaderInterface) => {

	const menus: MainMenuModel[] = [ new MainMenuModel("홈", "/", 1), new MainMenuModel("공모백과", "/encyclopedia", 2) ]

	const router = useRouter()
    const { Search } = Input
    const onSearch = (value: string) => {
        console.log(value)
    }
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

    const HeaderStyler = {
        padding: 0,

    }
    const onClickLogoHandler = () => {

    }

	const onClickMenuHandler = (url: string) => {
		router.push(url)
	}

	return <>
		<Head>
			<title>Finwhale</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
        <Header style= {HeaderStyler}>
            <div className={styles.header} >
                <div style= {{ marginRight: 'auto'}}>
                	<a className={styles.headerLogo} onClick={ () => onClickLogoHandler() }><img src='/logo/logo.png' width='50' height='50'></img></a>
                </div>

                <nav style= {{ minWidth: '540px' }}>
                    <div className={styles.headerContents}>
                        <Menu mode="horizontal" defaultSelectedKeys={[currentMenuKey.toString()]}>
                            {
                    		    menus.map((menu) => (
                                    <Menu.Item key={menu.key} onClick={() => onClickMenuHandler(menu.url)}>{menu.title}</Menu.Item>
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