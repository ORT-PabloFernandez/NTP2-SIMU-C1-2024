import "./peliculas.css";
import Link from "next/link";


export default function Pelicula(props){
    return(
       <li className="user-item">
            <div className="card user-item__content">
                <Link href={`/peliculas/${props.ID}`}>
                    <div className="user-item__image avatar">
                        <img src={props.poster} alt="{props.title}" />
                    </div>
                    <div className="user-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.fullplot}</h3>
                    </div>
                </Link>
            </div>
        </li>
    )




}