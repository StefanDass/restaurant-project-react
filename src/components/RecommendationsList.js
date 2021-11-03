import React, { Component } from "react";
import RecommendationListItem from "./RecommendationListItem";
import AddRecommendation from "./AddRecommendations";


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

      handleDeleteRecommendation(id) {
        const newRecommendationsList = this.state.recommendations.filter(recommendation => recommendation.id !== id);
        this.setState({recommendations: newRecommendationsList});   
      }

    renderRecommendations() {
        return this.state.recommendations.map((recommendation) => (
            <RecommendationListItem key={recommendation.id}
                            id={recommendation.id}
                            name={recommendation.name}
                            onDeleteRecommendation={(id) => this.handleDeleteRecommendation(id)}
            />
        ));
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