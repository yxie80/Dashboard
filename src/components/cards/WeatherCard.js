import React from 'react';
import {Card} from 'antd';
import Weather from '../Weather';

class WeatherCard extends React.Component {
    render() {
        return (
            <div>
                <Card title="Weather Card" style={{ width: 300 }}>
                    <Weather />
                </Card>
            </div>
        );
    }
}

export default WeatherCard;