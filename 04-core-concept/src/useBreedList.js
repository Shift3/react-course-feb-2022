import { useState, useEffect } from "react";

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else {
      requestBreedList();
    }
  }, [animal]);

  async function requestBreedList() {
    setBreedList([]);
    const results = await fetch(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );
    const json = await results.json();
    setBreedList(json.breeds);
  }

  return [breedList];
}
