import React from 'react';
import Tree from './Tree';

class Item extends React.Component {
  render(){
    return (
      <div>
        <div style={{
            background: 'white',
            border: '1px solid #ccc',
            padding: '1em',
            marginBottom: -1
        }}>
        {this.props.item.title}
      </div>
      <Tree
        parent={this.props.item.id}
        items={this.props.item.children}
      />
      </div>
    )
  }
}


export default Item;
