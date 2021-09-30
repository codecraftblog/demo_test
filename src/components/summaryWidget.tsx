import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector } from '../redux/hooks';
import { incremented, amountAdded } from '../redux/itemsSlice';
import { Grid, Segment } from 'semantic-ui-react'

export const SummaryWidget = () => {

const count = useAppSelector((state) => state.cart.count);
const total = useAppSelector((state) => state.cart.totalPrice);

return (
  <Segment color="green">
      <Grid columns={3} >
        <Grid.Column width={3} />
        <Grid.Column>
      <Grid columns={2} >
          <Grid.Column><h4>Count : { count } </h4></Grid.Column>
          <Grid.Column><h4>Total : ₹ { total } </h4> </Grid.Column>
      </Grid>
              </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    </Segment>
)
}