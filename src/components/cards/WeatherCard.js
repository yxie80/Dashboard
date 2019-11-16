import React from 'react';
import {Card} from 'antd';
import WeatherApp from '../WeatherAPP/WeatherApp';

class WeatherCard extends React.Component {
    render() {
        return (
            <div>
                <Card title="Weather Card" style={{ width: 300 }}>
                    <a class="weatherwidget-io" href="https://forecast7.com/en/n37d81144d96/melbourne/" data-label_1="MELBOURNE" data-label_2="WEATHER" data-days="5" data-theme="weather_one" >MELBOURNE WEATHER</a>
                </Card>
            </div>
        );
    }
}

export default WeatherCard;