import Head from "next/head"
import React from "react"
import styles from "../styles/Home.module.css"
const { Header } = Layout
import { Layout, Menu, Input, Space } from 'antd'
import { BellOutlined, UserOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import { HeaderMenuModel } from "../model/MainModel"
import { useRouter } from 'next/router'

interface HeaderInterface {
	currentMenuKey: number
}
const HeaderCustom = ({currentMenuKey}: HeaderInterface) => {

    const menus: HeaderMenuModel[] = [new HeaderMenuModel("홈", "/", 1), new HeaderMenuModel("공모백과", "/encyclopedia", 2) ]

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
        }
    ]

    const HeaderStyler = {
        padding: 0,

    }
    const onClickLogoHandler = () => {

    }
    
	const onClickMenuHandler = (url: string) => {
		router.push(url)
    }
    const onClickMyPageHandler = () => {
        router.push("/signin")
    }

	// TODO 기본적으로 return 안쪽에는 변수가 들어가면 안되고 모든 값은 위에서 결정된 값이 들어가야 합니다
	// TODO a 태그 안에 이미지 넣는거 안티패턴이라서 이미지 클릭 로고 방식 바꾸는거 추천드립니다
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
                        <div className={styles.headerMyProfile} onClick={() => onClickMyPageHandler()} />
                    </div>
                </nav>
            </div>
        </Header>
	</>
}

export default HeaderCustom