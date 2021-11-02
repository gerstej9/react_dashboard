import { Provider } from 'react-redux';
import store from '../store/index.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About.jsx';
import Usage from './pages/Usage.jsx';
import Home from './pages/Home.jsx';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import '../styles/base.css'
import '../styles/lightlayout.css'
import '../styles/darklayout.css'

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
