import { Provider } from 'react-redux';
import store from '../store/index.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './pages/about.js'
import Usage from './pages/usage.js'

function App() {
  return (
    <BrowserRouter>
      {/* <Provider store = {store}> */}
        <Switch>
          <Route path = "/usage">
            <Usage/>
          </Route>
          <Route path = "/about">
            <About/>
          </Route>
          <Route path = "/">

          </Route>
        </Switch>
      {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;
