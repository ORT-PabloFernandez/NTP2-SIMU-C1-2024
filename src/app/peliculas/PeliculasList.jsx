import "./users.css";
import Pelicula from "./Pelicula";

export default function UserList(props) {
  return (
    <ul className="users-list">
      {props.Pelicula.map((user) => {
        return (
          <Pelicula
            Id={user["Object Id"]}
            UserName={user["Display name"]}
            Title={user.Title}
            Picture={user.Picture}
          />
        );
      })}
    </ul>
  );
}
