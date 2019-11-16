import React from 'react';
import {Card} from 'antd';
import 'antd/dist/antd.css';

import TodoList from '../ToDo/TodoList';


class TodoCard extends React.Component {
    render() {
        return (
            <Card title='Todo List' style={{ width: 670 }}>
                <TodoList />
            </Card>
        );
    }
}

export default TodoCard;