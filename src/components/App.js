import { Provider } from 'react-redux';
import store from '../store/index.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About.js';
import Usage from './pages/Usage.js';
import Home from './pages/Home.js';
import Header from './layout/Header.js';
import Footer from './layout/Footer.js';

function App() {
  return (
    <BrowserRouter>
      <Provider store = {store()}>
        <Header/>
        <Switch>
          <Route path = "/usage">
            <Usage/>
          </Route>
          <Route path = "/about">
            <About/>
          </Route>
          <Route path = "/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
