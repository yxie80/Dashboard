import React from 'react';
import {List} from 'antd';
import data1 from '../../data.json';

class NewsFeed extends React.Component {
    render() {
        const data = data1.newsData;
        
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