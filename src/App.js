import './App.css';

import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Home from './screens/Home';
import Detalle from './screens/detalle';
import Favoritos from './screens/favoritos';
import Busqueda from './screens/busqueda';
import VerTodas from './screens/verTodas';

import Loader from './screens/loader';
import NotFound from './screens/notFound';



function App() {

  const [dataPeliculas, setData] = useState(true);

  useEffect(() => {
    fetchPopulares('popular');
  }, []);

  async function fetchPopulares(type) {
    try {
      const apiKey = `f14610908c45d33a1bf2ea0c3dcb500d`;
      let resp = await axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=es-ES&page=1`);
      console.log(resp.data.results);

      setData(resp.data.results);
    } catch (error) {
      console.error(error);
    }

  }


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