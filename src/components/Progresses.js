import React from 'react';
import { Progress } from 'antd';
import harvestPro from '../data.json';
const percent = harvestPro;

class Progresses extends React.Component {
    render() {
        return (
            <div style={{ width: 170 }}>
                <Progress percent={percent.harvestPro.percentage} size="small" />
            </div>
        );
    }
}

export default Progresses;