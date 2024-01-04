import React, { useState } from 'react';

const ExerciseSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // Pass the search query to the parent component (e.g., App) as the user types
    onSearch(query);
  };

  return (
    <div>
      <input style={{width: "80vw", margin:"25px 10vw" , height:"30px"}}
        type="text"
        placeholder="Search by target, body part, or exercise"
        value={searchQuery}
        onChange={handleSearchChange} // Trigger search as the user types
      />
    </div>
  );
};

export default ExerciseSearch;