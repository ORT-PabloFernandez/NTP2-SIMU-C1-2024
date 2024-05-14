import Movie from "./Movie";

export default function UserList(props) {
    return (
      <ul>
        {props.Movies.map((movie) => {
          return (
            <Movie
              Title={movie["title"]}
              Poster={movie["poster"]}
              FullPlot={movie["plot"]}
            />
          );
        })}
      </ul>
    );
  }