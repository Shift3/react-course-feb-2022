import { useState, useEffect, useContext } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);

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
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label>
          Animal:
          <select
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
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
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
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
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
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
