import React, { useState, useEffect } from "react";
import RecommendationListItem from "./RecommendationListItem";
//import AddRecommendation from "./AddRecommendations";

const RecommendationList = () => {
    const [recommendations, setRecommendations] = useState(null);

    const fetchRecommendations = () => { // use REST API
        //fetch("http://localhost:4000/api/v1/appetizers")
        fetch("https://fathomless-castle-79570.herokuapp.com/api/v1/recommendations")
            .then((response) => response.json())
            .then((result) => setRecommendations(result));
    };

    // ensures that API is called only once on mount
    useEffect(() => {
        fetchRecommendations();
    }, []);

    return (
        <>
            <h2>Recommendations</h2>
            { recommendations &&
                recommendations.map((recommendation) => (
                    <RecommendationListItem key={recommendation.id} {...recommendation}  />
                ))
            }
        </>
    );
};

export default RecommendationList

// handleAddRecommendation(name) {
//     const newRecommendation = { id: Date.now().toString(), name: name };
//     const newRecommendationsList = [...this.state.doctors, newRecommendation];

//     this.setState({ doctors: newRecommendationsList })
// }

// render() {
//     return (
//         <>
//          <h2>Recommendations</h2>
//          <AddRecommendation onAddRecommendation={(name) => this.handleAddRecommendation(name)} />
//          {this.renderRecommendations()}
//         </>
//     );
// }
// }