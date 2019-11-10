import React from 'react';
import {Card, Col, Row, Button, Popover} from 'antd';
import 'antd/dist/antd.css';
import Histories from '../Lists/Histories';
//import DateRange from '../DatePicker/DatePicker';
import Images from '../Image';
import Selector from '../Selector';
import rawData from '../../data.json';


  
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

const data = rawData.landData;

const size = `${data.size}Arc`;
const days = `${data.days}Planted`;
const density = `${data.percentage}%`;

const contentListNoTitle = {
    Map: 
      <div>
        <Col span={16} >
          <Row type="flex" justify="start" align="middle"><Images /></Row>
          <Row type="flex" justify="start" align="bottom">
            <Popover content={size}><Button>Size</Button></Popover> 
            <Popover content={days}><Button>Days</Button></Popover> 
            <Popover content={density}><Button>Density</Button></Popover> 
          </Row>
        </Col>
        <Col span={8} >
          <Histories />
        </Col>
      </div>,
    //soil: <p>app content</p>,
    //project: <p>project content</p>,
  };
  
class MapCard extends React.Component {
    
    state = {
      noTitleKey: 'Map',
    };
  
    onTabChange = (key, type) => {
      //console.log(key, type);
      this.setState({ [type]: key });
    };
  
    render() {
      const extraContent = 
      <div>
        <Selector />
      </div>;

      return (
        <div>
          <Card
            style={{ width: '100%' }}
            tabList={tabListNoTitle}
            activeTabKey={this.state.noTitleKey}
            tabBarExtraContent={extraContent}
            onTabChange={key => {
              this.onTabChange(key, 'noTitleKey');
            }}
          >
            {contentListNoTitle[this.state.noTitleKey]}
          </Card>
        </div>
      );
    }
  }

export default MapCard;