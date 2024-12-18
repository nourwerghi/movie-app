import React from "react";
import ReactStars from "react-stars";

const Filter = ({ setSearchTitle, setSearchRating, searchRating }) => {
  const handleRatingChange = (newRating) => {
    setSearchRating(newRating);
  };

  return (
    <div className="filter-container">
      <div className="filter">
        <div className="filter-group">
          <label className="filter-label">Search Movies</label>
          <input
            type="text"
            className="form-control"
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
              value={searchRating}
              onChange={handleRatingChange}
              color2={"#ffd700"}
              half={false}
            />
          </div>
          {searchRating > 0 && (
            <button 
              className="clear-rating" 
              onClick={() => setSearchRating(0)}
              style={{
                marginTop: '10px',
                padding: '5px 10px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#dc3545',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              Clear Rating Filter
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Filter.defaultProps = {
  searchRating: 0,
  setSearchTitle: () => {},
  setSearchRating: () => {}
};

export default Filter;
