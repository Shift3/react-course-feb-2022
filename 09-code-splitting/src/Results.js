import Animal from "./Animal";
import "./Results.css";

const Results = (props) => {
  return (
    <div className="results">
      {props.pets.map((pet) => (
        <Animal
          key={pet.id}
          id={pet.id}
          name={pet.name}
          type={pet.animal}
          breed={pet.breed}
        />
      ))}
    </div>
  );
};

export default Results;
