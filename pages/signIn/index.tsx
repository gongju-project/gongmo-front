import styles from '../../styles/Home.module.css'
import HeaderCustom from '../../utils/header'
import { Col, Layout, Row } from 'antd'
import 'antd/dist/antd.css'
import * as React from 'react'

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
            <Layout className={styles.signInContent}>
                <Row>
                    <Col span={8}>
                    </Col>
                    <Col span={8}>
                    <img className={styles.loginLogo} src='/logo/logo.png' />
                    <div>
                        <button className={`${styles.loginBtnKakao} ${styles.socialLoginBtn}`} onClick={() => onKaKaoClickLogInHandler()} >카카오 로그인</button>
                    </div>
                    <div>
                        <button className={`${styles.loginBtnGoogle} ${styles.socialLoginBtn}`} onClick={() => onGoogleClickLogInHandler()} >구글 로그인</button>
                    </div>
                    </Col>
                    <Col span={8}>
                    </Col>
                </Row>
		</Layout>
	</Layout>

	</>
}

export default Main