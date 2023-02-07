import React, { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import Informacion from './components/Informacion';
import './styles/styles.css'

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(10);
  const [aux, setAux] = useState([])

  const getData = () => {

    fetch('json/mockdata_usuarios.json')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        var lista = myJson.slice(0, count);
        setData(lista)
      });
  }
  useEffect(() => {
    getData()
  }, [count])


  return (
    <div className="App">
      {

        data.map((item) =>
          <div>
            <h3 onClick={() => setAux(item)}>{item.first_name}</h3>
          </div>
        )
      }
      {
        aux != null ? <Informacion mensaje={aux} /> : <Informacion mensaje={aux} />
      }

      <Button onClick={() => setCount(count + 1)} />
    </div>
  );
}

export default App;