import HeaderCustom from '../../components/Header'
import NewsBoard from '../../components/encyclopedia/NewsBoard'
import InitialPublicOfferingInfo from '../../components/encyclopedia/InitialPublicOfferingInfo'
import CompanyInfo from '../../components/encyclopedia/CompanyInfo'
import styles from '../../styles/Home.module.css'
import { Button, Card, Col, Layout, Row, Descriptions, Table, Space} from 'antd'
import 'antd/dist/antd.css'
const { Column } = Table;


const Main = () => {
	return <>
		<Layout>
            <HeaderCustom currentMenuKey={2} ></HeaderCustom>
            <Layout className={styles.encyclopediaLayout}>
                <InitialPublicOfferingInfo />
                <CompanyInfo />
                <NewsBoard />
            </Layout>
		</Layout>
	</>
}

export default Main