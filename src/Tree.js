import React from 'react';
import Item from './Item';

class Tree extends React.Component {
  render(){
    return (
      <div style={{
        position: 'relative',
        minHeight: 10,
        paddingTop: 10,
        marginTop: -11,
        marginLeft: '2em'
      }}>
      {this.props.items.map((item, i) => (
        <Item key={i} id={item.id} parent={this.props.parent} item={item}/>
      ))}
      </div>
    )
  }
}


export default Tree;
