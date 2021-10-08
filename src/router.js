import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Home2 from 'pages/Home2'
import Portfolio from 'pages/Portfolio/Portfolio'

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home2} />
      <Route path="/home1" exact component={Home} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>
  </BrowserRouter>
)
