import React from 'react';
import classes from './BuildControlls.css'
import BuildControl from './BuildControls/BuildControlls'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (
  <div className ={classes.BuildControls}>
  <p>Crrent Price: <strong>{props.price} </strong></p>
    {controls.map(clt => (
      <BuildControl
       key ={clt.label}
       label={clt.label}
       added={() => props.indgredientAdded(clt.type)}
       deducted={() => props.indgredientDeducted(clt.type)}
       disabled={props.disabled[clt.type]}
       />
    ))}
    <button

    className={classes.OrderButton}
    disabled={!props.purchasable}
    onClick={props.ordered}>ORDER NOW </button>

  </div>
);

export default buildControls;
