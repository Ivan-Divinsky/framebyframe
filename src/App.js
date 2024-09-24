import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import NotFound from './screens/NotFound';
import Detalle from './screens/Detalle';
import AboutUs from './screens/AboutUs';
import Favoritos from './screens/Favoritos';
import Generos from './screens/Genero';
import Resultados from './screens/Resultados';

function App() {
  return (
    <Switch>
      <Route path="/" exact = {true} component={Home} />
      <Route path="/pelicula/id/:id" component={Detalle} />
      <Route path="/genero/:genero" component={Generos} />
      <Route path="/Tusfavoritos" component={Favoritos} />
      <Route path="/aboutUs" component={AboutUs} />
      <Route path="/resultados/:resultado" component={Resultados} />
      <Route path="" component={NotFound} />
    </Switch>
  );
}

export default App;
