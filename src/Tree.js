import React from 'react';
import Item from './Item';

class Tree extends React.Component {
  render(){
    return (
      <div>
        {this.props.parent &&
            <div className='ny-card' data-ny-color="blue">
             {
            this.props.parent.title
              }
            </div>
        }
      {this.props.items && this.props.items.map((item, i) => (
        <div style={{marginLeft: '2em', marginTop: 5}}>
          <Tree key={i} id={item.id} parent={item} items={item.children}/>
        </div>
      ))}
      </div>
    )
  }
}


export default Tree;
