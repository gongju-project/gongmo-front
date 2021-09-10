import { Descriptions, Col, Row} from "antd"
import React from "react"
import { Bar } from 'react-chartjs-2'

const descriptionStyle = {
    textAlign: 'center',
    backgroundColor: "white"
};


const leftData = [
    {
        title: '상장공모',
        data: '13000',
        key: 'price',
    },
    {
        title: '청약경쟁률',
        data: '신한금투',
        key: 'organizer',
    },
    {
        title: '공모금액',
        data: '200',
        key: 'competitionRate',
    },
    {
        title: '배정주식수',
        data: '13000',
        key: 'price',
    },
    {
        title: '수요예측일',
        data: '신한금투',
        key: 'organizer',
    },
    {
        title: '구주매출',
        data: '200',
        key: 'competitionRate',
    },
];

const rightData = [
    {
        title: '액면가',
        data: '13000',
        key: 'price',
    },
    {
        title: '희망 공모가액',
        data: '신한금투',
        key: 'organizer',
    },
    {
        title: '확정공모가',
        data: '200',
        key: 'competitionRate',
    },
    {
        title: '청약한도',
        data: '13000',
        key: 'price',
    },
    {
        title: '기관경쟁률',
        data: '신한금투',
        key: 'organizer',
    },
    {
        title: '의무보유확약',
        data: '200',
        key: 'competitionRate',
    },
];
const salesData = {
    labels: ['2016', '2017', '2018', '2019', '2020'],
    datasets: [
        {
            label: '매출액',
            data: [12, 19, 3, 10, 30],
            backgroundColor: [
                '#BFE1FF'
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 1,
        },
    ],
};

const profitData = {
    labels: ['2016', '2017', '2018', '2019', '2020'],
    datasets: [
        {
            label: '영업이익',
            data: [12, 19, 3, 10, 30],
            backgroundColor: [
                '#BFE1FF'
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const CompanyInfo = () => {
    return (
        <>
            <Row style={{ marginTop: '1.5rem' }}>
                <Col span={11}>
                    <Bar data={salesData} options={options} />
                </Col>
                <Col span={2} />
                <Col span={11}>
                    <Bar data={profitData} options={options} />
                </Col>
            </Row>
            <Row style={{ marginTop: '1.5rem' }}>
                <Col span={12}>
                    <Descriptions bordered column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                        {
                            leftData.map((content) => (
                                <Descriptions.Item label={content.title} labelStyle={descriptionStyle} >{content.data}</Descriptions.Item>
                            ))
                        }
                    </Descriptions>
                </Col>
                <Col span={12} >
                    <Descriptions bordered column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                        {
                            rightData.map((content) => (
                                <Descriptions.Item label={content.title} labelStyle={descriptionStyle} >{content.data}</Descriptions.Item>
                            ))
                        }
                    </Descriptions>
                </Col>
            </Row>
        </>
    )
}

export default CompanyInfo
