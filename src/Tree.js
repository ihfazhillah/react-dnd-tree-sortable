
import React from 'react';
import {DragSource, DropTarget} from 'react-dnd';
//import Item from './Item';
//

const itemDragSource = {
  beginDrag(props, monitor, component){
    return {
      id: props.id,
      item: props.item,
      parent: props.parent
    }
  },
}

const itemDropTarget = {
  canDrop(){
      return false
  },

  hover(props, monitor){
    
    const hoverItem = props.id
    const dragItem = monitor.getItem().id

    if (dragItem === hoverItem || dragItem === props.parent) return;
    if (!monitor.isOver({shallow: true})) return;

    console.log("Hover Item")
    console.log(hoverItem)
    console.log("Drag Item")
    console.log(dragItem)
    props.move(dragItem, hoverItem, props.parent);
  }
}

const itemCollectDrag = (connect, monitor) => ({
  connectItemDrag: connect.dragSource(),
  connectItemDragPreview: connect.dragPreview(),
  isDrag: monitor.isDragging()
});

const itemCollectDrop = (connect, monitor) => ({
  connectItemDrop: connect.dropTarget()
});

class Item extends React.Component {
  render(){
    let opacity = this.props.isDrag ? 0.4 : 1;
    return this.props.connectItemDrop(this.props.connectItemDragPreview(
      <div>
        { this.props.connectItemDrag(
        <div className="ny-card" data-ny-color="blue" style={{marginBottom:4, opacity}}>
          <div className="ny-card-content">
        {this.props.item.title}
          </div>
      </div>
          )}
      <Tree
        parent={this.props.item.id}
        items={this.props.item.children}
        isDrag={this.props.isDrag}
        move={this.props.move}
        find={this.props.move}
      />
      </div>
    ))
  }
}

Item = DragSource('tree', itemDragSource, itemCollectDrag)(Item)
Item = DropTarget('tree', itemDropTarget, itemCollectDrop)(Item)

const treeDropTarget = {
  canDrop(){},

  hover(props, monitor, component){
    const {id: draggedId, parent, items} = monitor.getItem()

    if (!monitor.isOver({shallow: true})) return

    const descendantNode = props.find(props.parent, items)
    if (descendantNode) return
    if (parent == props.parent || draggedId == props.parent) return

    props.move(draggedId, props.id, props.parent)
  }
}

const treeCollect = (connect, monitor) => ({
  connectDropToDom: connect.dropTarget()
});

class Tree extends React.Component {
  render(){
    let opacity = this.props.isDrag ? 0.4 : 1;
    return this.props.connectDropToDom(
      <div style={{marginLeft: '2em', marginBottom: 4, opacity}}>
      {this.props.items && this.props.items.map((item, i) => (
          <Item move={this.props.move} find={this.props.find} key={i} id={item.id} parent={this.props.parent} item={item}/>
      ))}
      </div>
    )
  }
}

Tree = DropTarget('tree', treeDropTarget, treeCollect)(Tree)
export default Tree;
