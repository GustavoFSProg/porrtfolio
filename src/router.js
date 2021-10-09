import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from 'pages/Home'
import { Portfolio } from 'pages/Portfolio'

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>
  </BrowserRouter>
)
