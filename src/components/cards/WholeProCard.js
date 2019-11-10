import React from 'react';
import { Card } from 'antd';
import WholePro from '../WholePro';

class WholeProCard extends React.Component {
    render() {
        return (
            <Card style={{ width: 300 }}>
                <WholePro/>
            </Card>
        );
    }
}

export default WholeProCard;