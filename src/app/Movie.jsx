export default function Movie(props) {
  return (
    <div style={{ flex: '0 0 calc(50% - 20px)', margin: '10px', display: 'flex' }}>
      <div>
        <img src={props.Poster} alt={props.Title} style={{ width: '100px', height: 'auto', marginRight: '10px' }} />
      </div>
      <div style={{ flex: '1' }}>
        <h2 style={{ margin: '0 0 5px 0', fontSize: '1.2em' }}>{props.Title}</h2>
        <p style={{ margin: '0' }}>{props.FullPlot}</p>
      </div>
    </div>
  );
}
