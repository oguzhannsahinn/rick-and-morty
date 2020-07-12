import React from 'react';
import {Container} from 'reactstrap';
import Navi from '../../components/navi/Navi';
import CharacterList from '../../components/characters/CharacterList'
import CharacterDetail from '../../components/character/CharacterDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Container>
    <Router>
        <Navi/>
        <Switch>
          <Route exact path="/" component={CharacterList}></Route>
          <Route exact path="/CharacterDetail" component={CharacterDetail}></Route>
        </Switch>
    </Router>
    </Container>
  );
}

export default App;