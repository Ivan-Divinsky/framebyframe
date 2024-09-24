import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

class BarraDeBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  guardarBusqueda = () => {
    const { searchValue } = this.state;
    // Save the search value to local storage
    localStorage.setItem('searchValue', searchValue);
  }

  guardarInput = (event) => {
    const { value } = event.target;
    this.setState({ searchValue: value });
  }
  

  render() {
    const { searchValue } = this.state;

    return (
      <div className='searchBar'>
        <input type="text" placeholder="Buscar Película" value={searchValue} onChange={this.guardarInput} />
        <Link className='boton' to={`/resultados/${searchValue}`}>
          <button  onClick={this.guardarBusqueda}>
            <p>Ver más</p>
          </button>
        </Link>
      </div>
    );
  }
}

export default BarraDeBusqueda
