import React, { useEffect, useState } from "react";
import axios from "axios";
import Charactercard from "./Charactercard";
import CharacterModal from "./CharacterModal";
import Loader from "./Loader";
import Paginated from "./Paginated";
import "./Charlist.css";
import ErrorPage from "./ErrorPage";
const Charlist = ({ error, setError }) => {
  const [characters, setCharacters] = useState([]);
  const [filteredchars, setFilteredchars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const colorSpecies = {};
  useEffect(() => {
    console.log(page);
    getData();
  }, [page]);

  const getData = async () => {
    const data = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
    setLoading(false);
    setCharacters(data?.data?.results);
    setFilteredchars(data?.data?.results);
    if (data.status >= 500) setError(`error: ${data.status} API Server Error`);
  };

  function filterCharacters(searchText, characters) {
    console.log(searchText);
    const filterData = characters.filter((character) =>
        character.name.toUpperCase().includes(searchText.toUpperCase()));
    return filterData;
  }
  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <>
      {!error && (
        <div className="Body">
          <div className="search-bar">
            <input
              style={{
                width: "30vw",
                height: "5vh",
                margin: "30px 0",
                borderRadius: "10px",
              }}
              type="text"
              className="Search-input"
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="filter-button"
              onClick={() => {
                const filtered = filterCharacters(searchText, characters);
                setFilteredchars(filtered);
              }}
            >
              Search
            </button>
          </div>
          <div className="Character-card-container">
            {filteredchars.map((character, idx) => {
              return (
                <Charactercard
                  idx={idx}
                  character={character}
                  className="Card"
                />
              );
            })}

            <div>
              {selectedCharacter && (
                <CharacterModal character={selectedCharacter} />
              )}
            </div>
          </div>
          <div className="Paginated-container">
            <Paginated setPage={setPage} page={page} />
          </div>
        </div>
      )}
      {error && <ErrorPage status={error} />}
    </>
  );
};

export default Charlist;
