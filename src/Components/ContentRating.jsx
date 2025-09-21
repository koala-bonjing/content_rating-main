import React, { Component } from "react";
import "./ContentRating.css";

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislike: 0,
    };
  }

  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
    }));
  };

  handleDislike = () => {
    this.setState((prevState) => ({
      dislike: prevState.dislike + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>Text Content Rating</h1>
        <div className="content-rating">
          <p>Enot na babasahon</p>
          <div className="rating-buttons">
            <button className="like-button" onClick={this.handleLike}>
              Like ({this.state.likes})
            </button>
            <button
              className="dislike-button"
              onClick={this.handleDislike}
            >
              Dislike ({this.state.dislike})
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ContentRating;
