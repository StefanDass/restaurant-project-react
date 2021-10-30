import React, { Component } from "react";
//import RecommendationListItem from "./RecommendationListItem";
import AddRecommendation from "./AddRecommendations";

//import React, { Component } from 'react';


export default class RecommendationsList extends Component {
    constructor(props) {
        super(props);
  
        this.state = { recommendations: [] };
      }
  
      componentDidMount () {
          //fetch('http://localhost:4000/v1/doctors')
          fetch("https://fathomless-castle-79570.herokuapp.com/api/v1/recommendations")
          .then((response) => response.json())
          .then((result) => this.setState({ recommendations: result }));
      }
        
    handleAddRecommendation(name) {
        const newRecommendation = { id: Date.now().toString(), name: name };
        const newRecommendationsList = [...this.state.recommendations, newRecommendation];

        this.setState({ recommendations: newRecommendationsList })
    }

    render() {
        return (
            <>
            <h2>Recommendations</h2>
            <AddRecommendation onAddRecommendation={(name) => this.handleAddRecommendation(name)} />
            {this.renderRecommendations()}
             </>
        );
    }
}


    
// ///////////////////////////////////
// const RecommendationList = () => {
//     const [recommendations, setRecommendations] = useState(null);

//     const fetchRecommendations = () => { // use REST API
//         //fetch("http://localhost:4000/api/v1/appetizers")
//         fetch("https://fathomless-castle-79570.herokuapp.com/api/v1/recommendations")
//             .then((response) => response.json())
//             .then((result) => setRecommendations(result));
//     };

//     // ensures that API is called only once on mount
//     useEffect(() => {
//         fetchRecommendations();
//     }, []);

//     return (
//         <>
//             <h2>Recommendations</h2>
//             { recommendations &&
//                 recommendations.map((recommendation) => (
//                     <RecommendationListItem key={recommendation.id} {...recommendation}  />
//                 ))
//             }
//         </>
//     );
// };

// export default RecommendationList
