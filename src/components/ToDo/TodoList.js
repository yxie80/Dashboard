import React, { Component } from 'react';

import Form from './Form';
import DataList from './DataList';
import Footer from './Footer';
import datas from './data'
import './todolist.less'



class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }
  componentDidMount () {
    this.setState({
      list: datas
    })
  }

  deleteItem (id) {
    let deleteIndex = datas.findIndex(item => {
      return item.id === id
    })
    datas.splice(deleteIndex, 1)
    this.setState({
      list: datas
    })
  }

  changeItem (id) {
    let changeIndex = datas.findIndex(item => {
      return item.id === id
    })
    datas[changeIndex].isComplete = !datas[changeIndex].isComplete
    this.setState({
      list: datas
    })
  }

  handleSearchItem(value) {
    let newList = datas.filter(item => {
      return item.content.indexOf(value) !== -1
    })
    this.setState({
      list: newList
    })
  }

  addItem (item) {
    datas.push(item)
    this.setState({
      list: datas
    })
  }

  render () {
    return (
        <div>
          <Form searchItem={value => this.handleSearchItem(value)}></Form>
          <DataList list={this.state.list} deleteItem={id => this.deleteItem(id)} changeItem={id => this.changeItem(id)}></DataList>
          <Footer addItem={item => this.addItem(item)}></Footer>
        </div>
    )
  }
}

export default TodoList;