import { Counter } from './features/counter/Counter';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Counter />
                
              </>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
