import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Results from "./Results";
import useBreedList from "./useBreedList";
import changeAnimal from "./actionCreators/changeAnimal";
import changeTheme from "./actionCreators/changeTheme";
import changeBreed from "./actionCreators/changeBreed";
import changeLocation from "./actionCreators/changeBreed";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const location = useSelector((state) => state.location);
  const animal = useSelector((state) => state.animal);
  const breed = useSelector((state) => state.breed);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestAnimals();
  }, []);

  const requestAnimals = async () => {
    const results = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await results.json();
    setPets(json.pets);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestAnimals();
        }}
      >
        <label>
          Location:
          <input
            placeholder="Location"
            value={location}
            onChange={(e) => dispatch(changeLocation(e.target.value))}
          />
        </label>

        <label>
          Animal:
          <select
            value={animal}
            onChange={(e) => dispatch(changeAnimal(e.target.value))}
            onBlur={(e) => dispatch(changeAnimal(e.target.value))}
          >
            <option />
            {ANIMALS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </label>

        <label>
          Breed:
          <select
            disabled={!breeds.length}
            value={breed}
            onChange={(e) => dispatch(changeBreed(e.target.value))}
            onBlur={(e) => dispatch(changeBreed(e.target.value))}
          >
            <option />
            {breeds.map((b) => (
              <option value={b}>{b}</option>
            ))}
          </select>
        </label>

        <label htmlFor="theme">
          Theme:
          <select
            id="theme"
            value={theme}
            onChange={(e) => dispatch(changeTheme(e.target.value))}
            onBlur={(e) => dispatch(changeTheme(e.target.value))}
          >
            <option value="red">Red</option>
            <option value="darkblue">Dark Blue</option>
            <option value="darkgray">Dark Gray</option>
            <option value="peru">Peru</option>
          </select>
        </label>

        <button style={{ backgroundColor: theme, color: "#fff" }}>
          Submit
        </button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
