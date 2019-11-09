import React from 'react';
import { Progress } from 'antd';

const percent = {
    "percentage": 30,
}

class Progresses extends React.Component {
    render() {
        return (
            <div style={{ width: 170 }}>
                <Progress percent={percent.percentage} size="small" />
            </div>
        );
    }
}

export default Progresses;