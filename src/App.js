import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { lazy, Suspense} from "react";
import Header from './components/Header';
import {Container} from 'react-bootstrap'
import Loader from './components/Loader';
import NotFound from './pages/NotFound';

const HomePage = lazy(() => import("./pages/HomePage"));
const PokemonPage = lazy(() => import("./pages/PokemonPage"));
const FavoritePage = lazy(()=>import("./pages/FavoritePage"));



function App() {
  return (
    <BrowserRouter>
     <Suspense fallback={<div><Loader/></div>}>
    <Header/>
    <Container>
    <Switch>
      <Route  path='/' component={HomePage} exact/>
      <Route path='/pokemon/:id' component={PokemonPage}/>
      <Route path='/favorite' component={FavoritePage}/>
      <Route component = {NotFound}/>
      </Switch>
    </Container>
    </Suspense>
  </BrowserRouter>
  );
}

export default App;
