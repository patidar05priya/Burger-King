import React from 'react';
import classes from './buildControls.css'
import BuildControl from './BuildControls/BuildControlls'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (
  <div className ={classes.buildControls}>
    {controls.map(clt => (
      <BuildControl key ={clt.label} label={clt.label} />
    ))}

  </div>
);

export default buildControls;
