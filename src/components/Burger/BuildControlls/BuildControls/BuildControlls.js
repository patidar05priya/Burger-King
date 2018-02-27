import React from 'react';
import classes from './BuildControlls.css'

const buildControls = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className ={classes.More} onClick={props.added}> More
    </button>
    <button className ={classes.Less} onClick={props.deducted} disabled={props.disabled}> Less
     </button>

  </div>
);

export default buildControls;
