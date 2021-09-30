import React from 'react'
import { Grid, Segment, Button, Divider, Icon, Item, List, Image, Label } from 'semantic-ui-react'

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { incremented, amountAdded } from '../redux/itemsSlice';

export const ListItem = (props : any) => {

  const dispatch = useAppDispatch();

return (
    <List.Item>
      <List.Content floated='right'>
 <div>
    <Button icon 
            labelPosition='right' 
            positive 
            onClick={() => {dispatch(incremented(props.price))}}>
      <b>$ {props.price} </b>
      <Icon name='add' color="black" />
    </Button>
  </div>
      </List.Content>
      <Icon name='circle' size="big" color="teal" />
      <List.Content>{props.name}</List.Content>
    </List.Item>
)
}