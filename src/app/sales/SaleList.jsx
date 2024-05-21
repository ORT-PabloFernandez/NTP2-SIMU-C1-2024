import Sale from "./Sale";
import "./Sales.css";

export default function SaleList(props) {
    return (
        <ul className="movie-grid">
            {props.sales.map(sales => {
                return (
                    <Sale
                        id={sales["_id"]}
                        saleDate={sales.saleDate}
                        storeLocation={sales.storeLocation}
                        purchaseMethod={sales.purchaseMethod}
                    />
                );
            }

            )}
            </ul>

    );
}