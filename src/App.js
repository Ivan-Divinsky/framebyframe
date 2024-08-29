import './App.css';

import { Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import Detalle from './screens/detalle';
import Favoritos from './screens/favoritos';
import Busqueda from './screens/busqueda';
import VerTodas from './screens/verTodas';

import Loader from './screens/loader';
import NotFound from './screens/notFound';


function App() {





  return (
    <Switch>
      <Route path="/" exact = {true} component={Home} />
      <Route path="/detail" component={Detalle} />
      <Route path="/fav" component={Favoritos} />
      <Route path="/result" component={Busqueda} />
      <Route path="/all" component={VerTodas} />
      <Route path="/loader" component={Loader} />
      <Route path="" component={NotFound} />
    </Switch>
  );
}

export default App;