import Animal from "./Animal";

const Results = (props) => {
  return (
    <>
      {props.pets.map((pet) => (
        <Animal
          key={pet.id}
          name={pet.name}
          type={pet.animal}
          breed={pet.breed}
        />
      ))}
    </>
  );
};

export default Results;
