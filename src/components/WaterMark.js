import React from 'react';
import { Tooltip, Progress } from 'antd';

class WaterMark extends React.Component {
    render() {
        return (
            <div>
                <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress percent={60} successPercent={30} type="circle" />
                </Tooltip>
            </div>
        );
    }
}

export default WaterMark;