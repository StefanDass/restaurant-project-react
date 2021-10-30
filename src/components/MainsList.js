import React, { useState, useEffect } from "react";
import MainListItem from "./MainListItem";

const MainsList = () => {
    const [mains, setMains] = useState(null);

    const fetchMains = () => { // use REST API
        fetch("http://localhost:4000/api/v1/mains")
            .then((response) => response.json())
            .then((result) => setMains(result));
    };

    // ensures that API is called only once on mount
    useEffect(() => {
        fetchMains();
    }, []);

    return (
        <>
            <h2>Mains</h2>
            { mains &&
                mains.map((main) => (
                    <MainListItem key={main.id} {...main}  />
                ))
            }
        </>
    );
};

export default MainsList