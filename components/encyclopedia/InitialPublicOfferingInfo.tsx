import { Descriptions, Col, Row} from "antd"
import React from "react"

const descriptionStyle = {
    textAlign: 'center',
    backgroundColor: "white"
};

const data = [
    {
        title: '공모가',
        data: '13000',
        key: 'price',
    },
    {
        title: '주관사',
        data: '신한금투',
        key: 'organizer',
    },
    {
        title: '기관 경쟁률',
        data: '200',
        key: 'competitionRate',
    },
];


const InitialPublicOfferingInfo = () => {
    return (
        <>
            <Row style={{ marginTop: '1.5rem' }}>
                <Col span={12} >
                    <Descriptions bordered column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                        {
                            data.map((content) => (
                                <Descriptions.Item label={content.title} labelStyle={descriptionStyle} >{content.data}</Descriptions.Item>
                            ))
                        }
                    </Descriptions>
                </Col>
                <Col span={12}>
                    <Descriptions bordered column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                        <Descriptions.Item label="공모 스케쥴" labelStyle={descriptionStyle}>Cloud Database</Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>
        </>
    )
}

export default InitialPublicOfferingInfo
