export default function Tags( {props} ) {
    return (
      <div className="tags">
        {props.map((prop) => (
          <span className="tag" key={prop}>
            {prop}
          </span>
        ))}
      </div>
    );
  }