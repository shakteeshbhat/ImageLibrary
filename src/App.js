import ImageOfTheDay from './components/imageoftheday';
import ButtonAppBar from './components/Appbar';
import {AppCSS} from './components/constants';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Search from './components/search';

function App() {
  return (
      <Router>
        <div className={AppCSS} style={{margin: '0', padding: '0'}}>
          <ButtonAppBar/>
          <Switch>
            <Route path="/" exact component={ImageOfTheDay}/>
            <Route path="/search" exact component={Search}/>
          </Switch>

        </div>
      </Router>

  );
}

export default App;
