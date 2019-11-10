import React from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css';
import rawData from '../../data.json';

const preData = rawData.preData;
// const data = [
//     {
//       description: 'The ' + preData[0].type + ' is harvested on ' + preData[0].date + ' with ' + preData[0].revenue+ ' as Revenue',
//       title: 'Type1',
//     },
//     {
//       description: 'Good',
//       title: 'Type2',
//       revenue: '100w',
//     },
//     {
//       description: 'bad',
//       title: 'Type3',
//       revenue: '100w',
//     },
//     {
//       description: 'sever',
//       title: 'Type4',
//       revenue: '100w',
//     },
// ];
const data = {};
const datas = [];

preData.map(function(item) {   
    data['title'] = item.title;
    data['description'] = 'The ' + item.type + ' is harvested on ' + item.date + ' with ' + item.revenue + ' as Revenue';
    datas.push(data);
    return datas;
});

class Histories extends React.Component {
    render() {
        return (
            <div>
                <List
                    
                    itemLayout="horizontal"
                    dataSource={datas}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        //avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        //description={<a href="https://ant.design">{item.description}</a>}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description={item.description}
                        />
                    </List.Item>
                    )}
                />,
            </div>
        );
    }
}

export default Histories;