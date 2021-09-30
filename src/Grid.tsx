import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from './hooks';
import { incremented, amountAdded } from './itemsSlice';
import "./App.css"


import { Grid, Segment, Button, Divider, Icon, Item, List, Image } from 'semantic-ui-react'
import { ListItem } from "./ListItem"

const allItems = [
  {name: "Apples",price:2.50},
  {name: "Bananas",price:3.50},
  {name: "Chikoo",price:4.50},
  {name: "Orange",price:1.50},
  {name: "Strawberry",price:0.50}
];

const LayoutGrid = () => {
  const count = useAppSelector((state) => state.items.value);


  const dispatch = useAppDispatch();

return (
  <>
  <Segment placeholder>
    <Grid columns={3} >
          <Grid.Column width={3} />
      <Grid.Column width={8}>
  <List divided verticalAlign='middle'>
    
    { allItems.map((eachItem) => {
      return <ListItem name={ eachItem.name } price={eachItem.price} />
    }) 
    }
    
  </List>
      </Grid.Column>

  </Grid>
  </Segment>

  <Segment color="green">
      <Grid columns={3} >
        <Grid.Column width={3} />
        <Grid.Column>
      <Grid columns={2} >
          <Grid.Column><h4>Count : { count } </h4></Grid.Column>
          <Grid.Column><h4>Total : {  } </h4> </Grid.Column>
      </Grid>
              </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    </Segment>
  </>
)

}

export default LayoutGrid