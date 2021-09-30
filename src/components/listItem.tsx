import React, { useState } from 'react'
import { Button, Icon, List } from 'semantic-ui-react'

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { decremented, incremented, increaseTotal, decreaseTotal } from '../redux/cartSlice';

export const ListItem = (props : any) => {

const dispatch = useAppDispatch();

const [itemCount, setItemCount] = useState(0);

return (
    <List.Item>
      <List.Content floated='right'>
 <div>

  <Button.Group>
    <Button 
      icon="minus" 
      negative
      disabled = {itemCount <= 0 }
      onClick={() => {
              if (itemCount > 0) {
              dispatch(decremented());
              setItemCount(itemCount - 1);
              dispatch(decreaseTotal(props.price))
              }
              }} 
      />
    <Button compact>
      <h5> {itemCount}</h5>
    </Button>
    <Button icon="plus" 
    positive 
    color='green' 
          onClick={() => {
              dispatch(incremented());
              setItemCount(itemCount + 1);
              dispatch(increaseTotal(props.price))
              }} 
    />
  </Button.Group>
  </div>
      </List.Content>
      <Icon name='circle' size="big" color="teal" />
      <List.Content>{props.name} <b>(${props.price})</b> </List.Content>
    </List.Item>
)
}


/*
    <Button icon 
            labelPosition='right' 
            positive 
            onClick={() => {
              dispatch(incremented());
              dispatch(increaseTotal(props.price))
              setItemCount(itemCount + 1);
              }}>
      <b>$ {props.price} </b>
      <Icon name='add' color="black" />
    </Button>
  */