import React from 'react';
import {Card, Row} from 'antd';
import 'antd/dist/antd.css';
import StNum from '../statistics/number';
import Revenue from '../Revenue';

class Card1 extends React.Component {
    render() {
        const chartSize = {
            height: 150,
        };

        return (
            <div>
                <Card size="small" style={{ width: 250 }}>
                    <Revenue style={chartSize}/>
                    
                </Card>
            </div>
        );
    }
}

export default Card1;