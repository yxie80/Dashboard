import React from 'react';
import { Statistic, Row, Col } from 'antd';
import 'antd/dist/antd.css';

const statistics = {
    overallScore: 112893,
}

class StNum extends React.Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="Expected Revenue" value={statistics.overallScore} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default StNum;