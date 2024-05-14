import Link from "next/link";

export default function Movie(props) {
    return (
      <li>
        <div className="card user-item__content">
            <div className="user-item__image avatar">
            {props.Poster != null ? (
            <img src={props.Poster} w-full alt={props.Poster} />
          ) : null}
            </div>
            <div className="user-item__info">
              <h2>{props.Title}</h2>
              <h2>{props.FullPlot}</h2>
            </div>
        </div>
      </li>
    );
  }