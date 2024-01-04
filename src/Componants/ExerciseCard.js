import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <div style={{width:"400px", boxShadow:"2px 2px 5px 5px black", margin:"10px", padding:"0px 25px"}}>
      <img src={exercise.gifUrl} alt={exercise.name} className="w-full h-auto" />
     <div style={{padding:"0px 25px"}}>
      <h2>{exercise.name}</h2>
      <p >{exercise.type}</p>
      <p >{exercise.target}</p>
      <p >{exercise.bodyPart}</p>
      </div>
    </div>
  );
};

export default ExerciseCard;