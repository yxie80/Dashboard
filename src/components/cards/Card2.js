import React from 'react';
import {Card} from 'antd';
import Progresses from '../Progresses';


class Card2 extends React.Component {

    render() {
        const styleObject = {
            fontSize: 20,
        }

        return (
            <div>
                <Card size="small" style={{ width: 250 }}>
                    <p style={styleObject} >Harvest Progress</p>
                    <Progresses />
                </Card>
            </div>
        );
    }
}

export default Card2;





