import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ButtonDemo from './pages/button'
import InputDemo from './pages/input'
import CuiProject from './pages/CuiProject'

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/button-demo">ButtonDemo</Link>
          </li>
          <li>
            <Link to="/input-demo">InputDemo</Link>
          </li>
          <li>
            <Link to="/cuiproject-demo">CuiProject</Link>
          </li>
        </ul>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/button-demo">
            <ButtonDemo />
          </Route>
          <Route path="/input-demo">
            <InputDemo />
          </Route>
          <Route path="/cuiproject-demo">
            <CuiProject />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
