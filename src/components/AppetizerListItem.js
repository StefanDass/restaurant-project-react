import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppetizerDetails from './AppetizerDetails';

function AppetizerListItem({ id, name, price, likes, dislikes, ingredients }) {
    const [ details, setDetails ] = useState(null);
    
    // function handleLoadDetails() { // use AppetizerInfo API
    //     fetch(`http://localhost:5000/v1/appetizers/${id}`)
    //         .then((res) => res.json())
    //         .then((res) => setDetails(res));
    // }

    // ALTERNATIVE: toggle on & off with empty/non-empty details variable
    // Import ALL details from the single API call back in AppetizersList.js
    // When user clicks on an item, it sets the details to the already-fetched
    // data, which causes it to display because it is no longer null.
    // When user clicks on item AGAIN, it clears details to null, and thus
    // the details disappear.
    //
    // I thought of this solution so I could:
    //
    // 1 - Cut out the extra "info" REST API and just keep all the data
    //     under a single REST API, making life much easier.
    // 2 - Allow for the details to actually be toggleable! The user can
    //     simply click on the menu item again to hide the details.


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
            {details && <AppetizerDetails {...details} />}
        </div>
    );
}

AppetizerListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,

}

export default AppetizerListItem;