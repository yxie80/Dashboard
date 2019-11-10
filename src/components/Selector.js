import React from 'react';
import { Select } from 'antd';

const {Option} = Select;

function onChange(value) {
    console.log(`selected ${value}`);
}

class Selector extends React.Component {
    render() {
        return (
            <div>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a piece of land"
                    optionFilterProp="children"
                    onChange={onChange}
                    //onFocus={onFocus}
                    //onBlur={onBlur}
                    //onSearch={onSearch}
                    filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="Land1">Land1</Option>
                    <Option value="Land2">Land2</Option>
                    <Option value="Land3">Land3</Option>
                </Select>
            </div>
        );
    }
}

export default Selector;