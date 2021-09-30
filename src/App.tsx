import * as React from 'react'
import './App.css'
import { WidgetHeader } from './WidgetHeader';
import { CounterWidget } from './CounterWidget';
import MenuExampleStackable from './HeaderWidget'
import TransitionExampleGroup from "./SimpleList"
import 'semantic-ui-css/semantic.min.css'
import { Grid, Button } from 'semantic-ui-react'
import LayoutGrid from "./Grid"

export default function App() {
  return (
    <LayoutGrid />
  )
}

//      <MenuExampleStackable />

        // <WidgetHeader />
        // <CounterWidget />
        // <TransitionExampleGroup />