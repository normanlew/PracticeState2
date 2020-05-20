import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0
  };

  // Write a function that returns 5 Star components
  // Use a loop and the push method to add stars to an array based on a # value, then render the stars to the dom
  returnStars = () => {
    const numberOfStars = 5;
    let starArray = [];

    for (let i = 0; i < numberOfStars; i++) {
      starArray.push(
        <Star 
          shouldBeFilled={this.state.rating > i}
          setRating = {() => this.handleRating(i + 1)}
          key = {i}
        />
      );
    }
    return starArray;
  }

  handleRating = (rating) => {
    this.setState( {
      rating
    });
  }


  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props
  // This is based on the star the user clicks


  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        {this.returnStars()}
      </ul>
    );
  }
}

export default StarRating;