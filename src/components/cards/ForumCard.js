import React from 'react';
import {Card} from 'antd';
import ForumFeed from '../Lists/Forum';



class ForumCard extends React.Component {
    render() {

        return (
            <div>
                <Card title="News Card" size="small" style={{ width: 250 }}>
                    <ForumFeed />
                </Card>
            </div>
        );
    }
}

export default ForumCard;