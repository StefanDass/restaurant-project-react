import React, { useState } from "react";

const AddRecommendation = (props) => {
    const [recommendation, setRecommendationName] = useState('');

    const handleChangeName = (event) => {
        setRecommendationName(event.target.value);
    };

    const handleAddRecommendation = () => {
        props.onAddRecommendation(recommendation);
    };

    return (
    <div>
    <input type='text' value={recommendation} onChange={handleChangeName} />
    <button onClick={handleAddRecommendation}>Add Recommendation</button>
    </div>
    );
};
    
export default AddRecommendation;