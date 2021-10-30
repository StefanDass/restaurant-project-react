import React, { useState, useEffect } from "react";
import DessertListItem from "./DessertListItem";

const DessertsList = () => {
    const [desserts, setDesserts] = useState(null);

    const fetchDesserts = () => { // use REST API
        //fetch("http://localhost:4000/api/v1/desserts")
        fetch("https://fathomless-castle-79570.herokuapp.com/api/v1/desserts")
            .then((response) => response.json())
            .then((result) => setDesserts(result));
    };

    // ensures that API is called only once on mount
    useEffect(() => {
        fetchDesserts();
    }, []);

    return (
        <>
            <h2>Desserts</h2>
            { desserts &&
                desserts.map((dessert) => (
                    <DessertListItem key={dessert.id} {...dessert}  />
                ))
            }
        </>
    );
};

export default DessertsList