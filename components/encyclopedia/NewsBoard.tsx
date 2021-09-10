import { Col, Row, Card } from "antd"
import React from "react"
import { v4 } from 'uuid'


const gridStyle = {
    width: '50%',
    textAlign: 'center',
};

const data = [
    {
        title: 'Go Daum',
        data: 'daum.net',
        key: 'news',
    },
    {
        title: 'Go Namer',
        data: 'naver.com',
        key: 'news',
    },
    {
        title: 'Go google',
        data: 'google.com',
        key: 'news',
    },
];

const NewsBoard = () => {
    return (
        <>
            <Row style={{ marginTop: '1.5rem' }}>
                <Col span={24} >
                    <Card title="공시 자료">
                        {
                            data.map((content) => (
                                <Card.Grid style={gridStyle} >{content.title}</Card.Grid>
                            ))
                        }
                    </Card>,
                    </Col>
            </Row>
        </>
    )
}

export default NewsBoard
