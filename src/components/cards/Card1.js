import React from 'react';
import {Card} from 'antd';
//import StNum from '../statistics/number';
import Revenue from '../Revenue';
import rawData from '../../data.json';


const expRevenue = rawData.expRevenue;

class Card1 extends React.Component {
    render() {
        const styObj = {
            fontSize: 18,
            bold: true
        };

        return (
            <div>
                <Card size="small" style={{ width: 335 }}>
                    <p style={styObj}><span>Expected Revenue: {expRevenue.revenue}</span></p>
                    <Revenue />                    
                </Card>
            </div>
        );
    }
}

export default Card1;