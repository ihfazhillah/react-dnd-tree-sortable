import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Tree from './Tree';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

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

    this.state = {
      dataTree: []
    }
  }

  componentWillMount(){
    this.setState({dataTree: treeData})
  }

  render() {
    const {dataTree} = this.state;

    return (
      <div style={{
        margin: 30
      }}>
      <div className="col-xs-6">
        <div className="ny-flex--col">
          <div className="ny-card">
            <div className="ny-card-title">
              SortAble tree using react dnd
            </div>

            <div className="ny-card-content">
          <Tree parent={null} items={dataTree} />    
        </div>
      </div>
        </div>
      </div>

      <div className="col-xs-6">
          <div className="ny-flex--col">
        <div className="ny-card">
          <div className="ny-card-title">TreeData stringify</div>
          <div className="ny-card-content">
            <pre className="ny-code"> {JSON.stringify(dataTree, null, 4)}</pre>
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
