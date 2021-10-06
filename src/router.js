import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio/PortfolioMobile'
import Home from './pages/Home/Home'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </BrowserRouter>
  )
}
