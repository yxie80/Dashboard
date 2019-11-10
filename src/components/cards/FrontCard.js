import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import frontData from '../../data.json';

const data = frontData;

class FrontCard extends React.Component {
    render() {
        return (
            <Card style={{ width: 300 }}>
                <p className="condi" >Growth Condition: {data.frontData.condition}</p>
                <p className="score">Overall Score: {data.frontData.score}/100</p>
                <p className="todo">Action To Do: {data.frontData.action}</p>
            </Card>
        );
    }
}

export default FrontCard;