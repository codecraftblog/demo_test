import React, { useState } from 'react'
import { Button, Icon, List } from 'semantic-ui-react'

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { decremented, incremented } from '../redux/cartSlice';

export const ListItem = (props: any) => {

  const dispatch = useAppDispatch();

  return (
    <List.Item>
      <List.Content floated='right'>
        <div>
          <Button.Group>
            <Button
              icon="minus"
              negative
              disabled={false}
              onClick={() => {
                dispatch(decremented())
               }}
            />
            <Button compact>
              <h5> 0 </h5>
            </Button>
            <Button icon="plus"
              positive
              color='green'
              onClick={() => { 
                dispatch(incremented());
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