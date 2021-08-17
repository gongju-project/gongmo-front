import styles from '../../styles/Home.module.css'
import HeaderCustom from '../../utils/header'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import * as React from 'react'
const { Content } = Layout;

const onKaKaoClickLogInHandler = () => {

}
const onGoogleClickLogInHandler = () => {

}
const Main = () => {
	return <>
	<Layout>
            <HeaderCustom
                currentMenuKey = {3}
            ></HeaderCustom>
            <Layout  style={{ padding: '0 24px 24px' }}>
                <Content className={styles.signinLayout}>
                    <div>
                        <div>
                            <a className={styles.loginLogo}><img src='/logo/logo.png' width='183px' /></a>
                        </div>
                        <div>
                            <button className={styles.loginBtnKakao} onClick={() => onKaKaoClickLogInHandler()} >KaKao</button>
                        </div>
                        <div>
                            <button className={styles.loginBtnGoogle} onClick={() => onGoogleClickLogInHandler()} >Google</button>
                        </div>
                    </div>
			</Content>
		</Layout>
	</Layout>

	</>
}

export default Main