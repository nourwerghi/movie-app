import React from "react";
import ReactStars from "react-stars";

const Filter = ({ setSearchTitle, setSearchRating }) => {
  return (
    <div className="filter-container">
      <div className="filter">
        <div className="filter-group">
          <label className="filter-label">Search Movies</label>
          <input
            type="text"
            placeholder="Enter movie title..."
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
        
        <div className="filter-group">
          <label className="filter-label">Filter by Rating</label>
          <div className="stars-container">
            <ReactStars
              count={5}
              size={30}
              value={0}
              onChange={(newRating) => setSearchRating(newRating)}
              color2={"#ffd700"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
