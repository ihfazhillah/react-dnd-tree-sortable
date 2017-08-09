import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Tree from './Tree';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import _ from 'lodash'
import {Nestable} from './react-dnd-nestable';

const treeData = [
  {
    id: 1,
    title: 'Python',
    children:[
      {
        id: 5,
        title: 'Flask',
        children: [
          {
            id: 8,
            title: 'Flask-Migrate',
            children: []
          }
        ]
      },

      {
        id: 6,
        title: 'Django',
        children: []
      },

      {
        id: 7,
        title: 'webpy',
        children: []
      }
    ]
  },

  {
    id: 2,
    title: 'Javascript',
    children:[]
  },

  {
    id: 3,
    title: 'Ruby',
    children:[]
  }
]

class App extends Component {
  constructor(props){
    super(props)
    this.updateItem = this.updateItem.bind(this)

    this.state = {
      dataTree: []
    }
  }

  componentWillMount(){
    this.setState({dataTree: treeData})
  }

  renderItem = ({item}) => (
    <div className="ny-card" data-ny-color="purple">
      <div className="ny-card-content">
    {item.title}</div>
    </div>
  )

  updateItem(item){
    this.setState({dataTree: item});
  }

  render() {
    const {dataTree} = this.state;

    return (
      <div style={{
        margin: 30,
        listStyle: 'none'
      }}>
      <div className="col-xs-6">
        <div className="ny-flex--col">
          <div className="ny-card">
            <div className="ny-card-title">
              SortAble tree using react dnd
            </div>

            <div className="ny-card-content">
              <Nestable
                items={this.state.dataTree}
                renderItem={this.renderItem}
                onUpdate={this.updateItem}
                childrenStyle={{marginLeft: '2rem', listStyle: 'none'}}
              />

        </div>
      </div>
        </div>
      </div>

      <div className="col-xs-6">
          <div className="ny-flex--col">
        <div className="ny-card">
          <div className="ny-card-title">TreeData stringify</div>
          <div className="ny-card-content">
            <pre>{JSON.stringify(this.state.dataTree, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
      );
    }
}

App = DragDropContext(HTML5Backend)(App)
export default App;
