import React from 'react';
import {Card} from 'antd';
import NewsFeed from '../Lists/News';



class NewsCard extends React.Component {
    render() {

        return (
            <div>
                <Card title="News Card" size="small" style={{ width: 300 }}>
                    <NewsFeed />
                </Card>
            </div>
        );
    }
}

export default NewsCard;