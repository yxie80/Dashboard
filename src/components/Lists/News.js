import React from 'react';
import {List} from 'antd';

class NewsFeed extends React.Component {
    render() {
        const data = [
            {
                title: 'Title1',
                description: 'test news',
            },
            {
                title: 'Title2',
                description: 'test news',
            },
            {
                title: 'Title3',
                description: 'test news',
            },
        ]
        
        return (
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                            //avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            //condition={<a href="https://ant.design">{item.condition}</a>}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default NewsFeed;