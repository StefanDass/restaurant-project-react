import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecommendationDetails from './RecommendationDetails';

function RecommendationListItem({ id, name, onDeleteDoctor }) {
    const [ details, setDetails ] = useState(null);
    
    function handleLoadDetails() { 
        if (details) { // already clicked & showing details
            setDetails(null); // clear details value
        } else { // details are NOT showing yet
            setDetails({    // set details to properties
                id,
                name
            });
        }
    }

    function handleDeleteDoctor() {
        onDeleteDoctor(id);
    }

    return (
        <div>
            <a href='#' onClick={handleLoadDetails}>
                {name}
            </a>
            <button onClick={handleDeleteDoctor}>X</button>
            {details && <RecommendationDetails {...details} />}
        </div>
    );
}

RecommendationListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

export default RecommendationListItem;