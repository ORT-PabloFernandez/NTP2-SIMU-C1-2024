export default function Movie(props) {
  return (
    <div>
      <img src={props.img} alt="movie poster" />
      <section>
        <h1>{props.title}</h1>
        <p>{props.fullplot}</p>
      </section>
    </div>
  );
}
