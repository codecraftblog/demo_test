import React from 'react'
import { List } from 'semantic-ui-react'
import { ListItem } from "./listItem"

const allItems = [
  {name: "Apples",price:2.50},
  {name: "Bananas",price:3.50},
  {name: "Chikoo",price:4.50},
  {name: "Orange",price:1.50},
  {name: "Strawberry",price:0.50}
];

export const FruitList = (props : any) => {

return (
  <List divided verticalAlign='middle'>
    
    { allItems.map((eachItem) => {
      return <ListItem name={ eachItem.name } price={eachItem.price} />
    }) 
    }

  </List>

)
}