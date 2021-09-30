import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { FruitList } from "./fruitList"
import { SummaryWidget } from "./summaryWidget"

const LayoutGrid = () => {

return (
  <>
  <Segment placeholder>
    <Grid columns={3} >
      <Grid.Column width={3} />
      <Grid.Column width={8}>
        <FruitList />
      </Grid.Column>
      <Grid.Column />
    </Grid>
  </Segment>
  
  <SummaryWidget />
  </>
)
}

export default LayoutGrid