import { useState } from 'react';
import { AddCategory } from './AddCategory';

function Items() {
  const [categorias, setCategorias] = useState('item 1');

  return (
    <>
      <h2>Items category</h2>
      <AddCategory setCategorias={setCategorias} />
    </>
  );
}

export default Items;
