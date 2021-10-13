import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';
import Header from './components/Header';
import FavoritePage from './components/FavoritePage';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Container>
      <Route  path='/' component={HomePage} exact/>
      <Route path='/pokemon/:id' component={PokemonPage}/>
      <Route path='/favorite' component={FavoritePage}/>
    </Container>
  </BrowserRouter>
  );
}

export default App;
