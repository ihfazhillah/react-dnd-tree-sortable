
import React from 'react';
import {DragSource, DropTarget} from 'react-dnd';
//import Item from './Item';
//

const itemDragSource = {
  beginDrag(props, monitor, component){
    return {
      id: props.id,
      item: props.item
    }
  },
}

const itemCollectDrag = (connect, monitor) => ({
  connectItemDrag: connect.dragSource(),
  isDrag: monitor.isDragging()
});

class Item extends React.Component {
  render(){
    let opacity = this.props.isDrag ? 0.4 : 1;
    return this.props.connectItemDrag(
      <div>
        <div className="ny-card" data-ny-color="blue" style={{marginBottom:4, opacity}}>
          <div className="ny-card-content">
        {this.props.item.title}
          </div>
      </div>
      <Tree
        parent={this.props.item.id}
        items={this.props.item.children}
        isDrag={this.props.isDrag}
      />
      </div>
    )
  }
}

Item = DragSource('tree', itemDragSource, itemCollectDrag)(Item)


class Tree extends React.Component {
  render(){
    let opacity = this.props.isDrag ? 0.4 : 1;
    return (
      <div style={{marginLeft: '2em', marginBottom: 4, opacity}}>
      {this.props.items && this.props.items.map((item, i) => (
          <Item key={i} id={item.id} parent={this.props.parent} item={item}/>
      ))}
      </div>
    )
  }
}

export default Tree;
