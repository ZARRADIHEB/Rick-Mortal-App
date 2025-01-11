import React, { useEffect, useState } from "react";
import axios from "axios";

const Filter = ({ setCharacters }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const filterByName = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${inputValue}`
      );
      setCharacters(response.data.results);
    };

    filterByName();
  }, [inputValue, setCharacters]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="search-bar"
      />
    </div>
  );
};

export default Filter;
