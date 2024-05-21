
"use client"
import { useState, useEffect } from "react";
import SaleList from "./SaleList";
import "./Sales.css";


export default function SalePage() {
    const [sales, setSales] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const pageSize = 100;


    useEffect(() => {
        fetch(`https://salesbackend.azurewebsites.net/api/sales?pageSize=[pageSize]&page=[page]`)
            .then(
                response => response.json())
            .then(data => {
                console.log(data);
                if (data.length < pageSize) {
                    setHasMore(false);
                }
                if (page === 1) {
                    setSales(data);
                } else {
                    setSales((prevSales) => [...prevSales, ...data]);
                }
            })
            .catch(
                error => console.log(error));
    }, [page]);


    return (
        <div className="container">
            <SaleList sales={sales} />
        </div>
    );
}