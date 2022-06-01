import { useState } from 'react';
import Articulos from './Articulos';

function ListaCompra(props) {
  const [show, setShow] = useState(false);
  const items = [
    {
      price: 5,
      desc: 'lorem ipsum 1',
    },
    {
      price: 8,
      desc: 'lorem ipsum 2',
    },
    {
      price: 9,
      desc: 'lorem ipsum 3',
    },
  ];

  return (
    <section>
      <h1>Sección Articulos</h1>
      {show && items.map((i) => <Articulos data={i} />)}

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        mostrar
      </button>
    </section>
  );
}
export default ListaCompra;
