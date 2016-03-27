import React from 'react';

export default (props) => {
  if(props.item)
    return (
      <div className={"item-container " + (props.equipment?("item-container-" + props.item.type):"")}>
        <div
          className={"item " + props.item.type} onClick={props.onClickHandler}
          style={{backgroundPosition: (props.item.set-1)*-17+"px"}}
          data-id={props.item._id}
        >
        </div>
      </div>
    );
  else {
    return (
      <div></div>
    );
  }
}