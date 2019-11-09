import React from 'react';
import {Card, Col} from 'antd';
import 'antd/dist/antd.css';
import Histories from '../Lists/Histories';
import DateRange from '../DatePicker/DatePicker';
import Images from '../Image';



  
const tabListNoTitle = [
    {
      key: 'Map',
      tab: 'Map',
    },
    // {
    //   key: 'soil',
    //   tab: 'soil',
    // },
    // {
    //   key: 'project',
    //   tab: 'project',
    // },
  ];

const contentListNoTitle = {
    Map: <p>map</p>,
    //soil: <p>app content</p>,
    //project: <p>project content</p>,
  };
  
class MapCard extends React.Component {
    
    state = {
      noTitleKey: 'app',
    };
  
    onTabChange = (key, type) => {
      //console.log(key, type);
      this.setState({ [type]: key });
    };
  
    render() {
      return (
        <div>
          <Card
            style={{ width: '100%' }}
            tabList={tabListNoTitle}
            activeTabKey={this.state.noTitleKey}
            tabBarExtraContent={<DateRange />}
            onTabChange={key => {
              this.onTabChange(key, 'noTitleKey');
            }}
          >
            {contentListNoTitle[this.state.noTitleKey]}
            <Col span={16} >
              <Images />
            </Col>
            <Col span={4} >
              <Histories />
            </Col>
            
          </Card>
        </div>
      );
    }
  }

export default MapCard;