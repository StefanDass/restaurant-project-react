import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DessertDetails from './DessertDetails';

function DessertListItem({ id, name, price, likes, dislikes, ingredients }) {
    const [ details, setDetails ] = useState(null);
    
    function handleLoadDetails() { 
        if (details) { // already clicked & showing details
            setDetails(null); // clear details value
        } else { // details are NOT showing yet
            setDetails({    // set details to properties
                id,
                name,
                price,
                likes,
                dislikes,
                ingredients
            });
        }
    }

    // no need to delete items

    return (
        <div>
            <a href='#' onClick={handleLoadDetails}>
                {name}
            </a>
            {details && <DessertDetails {...details} />}
        </div>
    );
}

DessertListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,

}

export default DessertListItem;