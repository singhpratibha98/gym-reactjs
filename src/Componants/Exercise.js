import React, { useEffect, useState } from 'react';
import ExerciseCard from './ExerciseCard';
import ExerciseSearch from './ExerciseSearch';

const Exercise = () => {
    const [exercises, setExercises] = useState([]);
    const [numCards, setNumCards] = useState(20);
    const [searchQuery, setSearchQuery] = useState(''); // State for the search query
    const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://exercisedb.p.rapidapi.com/exercises';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '382a6d837dmsh3673b78e742714bp186656jsndf23804edbc1',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setExercises(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const loadMoreCards = () => {
    setNumCards(numCards + 23); // Increase the number of cards to display
  };

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query state
  };

  // Filter exercises based on the search query
  useEffect(() => {
    const filteredResults = exercises.filter((exercise) =>
      exercise.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exercise.bodyPart.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [exercises, searchQuery]);

  return (
    <div style={{}}>
      <hr></hr>
      <hr></hr>
      <h1 style={{margin:"50px 75px 0"}}>Exercise List</h1>
      
      <ExerciseSearch onSearch={handleSearch} />

      <div style={{display:"flex" , flexWrap:"wrap", justifyContent:"center"}}>
        {searchResults.length > 0
          ? searchResults.slice(0, numCards).map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))
          : exercises.slice(0, numCards).map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
      </div>
      {numCards < (searchResults.length > 0 ? searchResults : exercises).length && (
        <div style={{display:"flex", justifyContent:"center", margin:"25px"}}>
          <button style={{padding:"10px 40px", borderRadius:"15px", backgroundColor:"blue", color:"white", fontSize:"20px", fontWeight:"800", width:"40%", border:"none"}}
            onClick={loadMoreCards}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Exercise;