import React, { useState, useEffect } from "react";
import AppetizerListItem from "./AppetizerListItem";

const AppetizersList = () => {
    const [appetizers, setAppetizers] = useState(null);

    const fetchAppetizers = () => { // use REST API
        fetch("http://localhost:4000/api/v1/appetizers")
            .then((response) => response.json())
            .then((result) => setAppetizers(result));
    };

    // ensures that API is called only once on mount
    useEffect(() => {
        fetchAppetizers();
    }, []);

    return (
        <>
            <h2>Appetizers</h2>
            { appetizers &&
                appetizers.map((appetizer) => (
                    <AppetizerListItem key={appetizer.id} {...appetizer}  />
                ))
            }
        </>
    );
};

export default AppetizersList