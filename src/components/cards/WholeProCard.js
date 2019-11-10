import React from 'react';
import { Card } from 'antd';
import WholePro from '../WholePro';

class WholeProCard extends React.Component {
    render() {
        const styleObj = {
            fontSize: 20
        }
        return (
            <Card style={{ width: 300 }}>
                <p style={styleObj}>Progress for all lands</p>
                <WholePro/>
            </Card>
        );
    }
}

export default WholeProCard;