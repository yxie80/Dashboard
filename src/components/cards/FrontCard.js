import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

const data = {
    condition: 'Good',
    score: '80',
    action: 'Weed Clearnance',
};

class FrontCard extends React.Component {
    render() {
        return (
            <Card style={{ width: 300 }}>
                <p className="condi" >Growth Condition: {data.condition}</p>
                <p className="score">Overall Score: {data.score}/100</p>
                <p className="todo">Action To Do: {data.action}</p>
            </Card>
        );
    }
}

export default FrontCard;