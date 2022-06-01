function Articulos({ data }) {
  return (
    <article>
      <h1>{data.price}</h1>
      <p>{data.desc}</p>
    </article>
  );
}
export default Articulos;
