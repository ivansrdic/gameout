import React from 'react';

export default (props) => {
  if(props.set > 0)
    return (
      <div className={"item-container " + (props.equipment?("item-container-" + props.type):"")}>
        <div
          className={"item " + props.type} onClick={props.onClickHandler}
          style={{backgroundPosition: (props.set-1)*-17+"px"}}
          data-type={props.type}
          data-set={props.set}
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