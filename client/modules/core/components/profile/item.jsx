import React from 'react';

export default (props) => {
  return (
    <div className={"item-container " + (props.equipment?("item-container-" + props.type):"")}>
      <div
        className={"item " + props.type} onClick={props.onClickHandler}
        style={{backgroundPosition: props.set*-16+"px"}}
        data-type={props.type}
        data-set={props.set}
      >
      </div>
    </div>
  );
}