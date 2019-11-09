import React from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css';


const data = [
    {
      condition: 'Greate',
      title: 'Type1',
      revenue: '100w',
    },
    {
      condition: 'Good',
      title: 'Type2',
      revenue: '100w',
    },
    {
      condition: 'bad',
      title: 'Type3',
      revenue: '100w',
    },
    // {
    //   condition: 'sever',
    //   title: 'Type4',
    //   revenue: '100w',
    // },
];

class Histories extends React.Component {
    render() {
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
                        description="Good"
                        />
                    </List.Item>
                    )}
                />,
            </div>
        );
    }
}

export default Histories;