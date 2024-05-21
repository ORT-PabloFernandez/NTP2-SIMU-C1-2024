import Sale from "../sales/Sale";
import Item from "./Item";


export default function ItemList(props) {
    return (
        <ul className="movie-grid">
            {props.map(items => {
                return (
                    <Item
                        pens={items.pens}
                        price={items.price}
                        queantity={items.queantity}
                    />
                );
            }

            )}
        </ul>

    );
}