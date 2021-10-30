import React, { useState, useEffect } from "react";
import DrinkListItem from "./DrinkListItem";

const DrinksList = () => {
    const [drinks, setDrinks] = useState(null);

    const fetchDrinks = () => { // use REST API
        fetch("http://localhost:4000/api/v1/drinks")
            .then((response) => response.json())
            .then((result) => setDrinks(result));
    };

    // ensures that API is called only once on mount
    useEffect(() => {
        fetchDrinks();
    }, []);

    return (
        <>
            <h2>Drinks</h2>
            { drinks &&
                drinks.map((drink) => (
                    <DrinkListItem key={drink.id} {...drink}  />
                ))
            }
        </>
    );
};

export default DrinksList